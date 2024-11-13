import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Collapse } from 'reactstrap';
import navdata from "../LayoutMenuData";
import { withTranslation } from "react-i18next";
import withRouter from "../../Components/Common/withRouter";
import { useSelector } from "react-redux";
import { createSelector } from 'reselect';

const VerticalLayout = (props) => {
    const navData = navdata().menuItems;
    const path = props.router.location.pathname;

    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const selectLayoutState = (state) => state.Layout;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (layout) => ({
            leftsidbarSizeType: layout.leftsidbarSizeType,
            sidebarVisibilitytype: layout.sidebarVisibilitytype,
            layoutType: layout.layoutType
        })
    );

    const {
        leftsidbarSizeType, sidebarVisibilitytype, layoutType
    } = useSelector(selectLayoutProperties);

    const resizeSidebarMenu = useCallback(() => {
        const windowSize = document.documentElement.clientWidth;
        if (windowSize >= 1025) {
            document.documentElement.setAttribute("data-sidebar-size", leftsidbarSizeType);
        } else if (windowSize < 1025 && windowSize > 767) {
            document.documentElement.setAttribute("data-sidebar-size", "sm");
        } else if (windowSize <= 767) {
            document.body.classList.remove("vertical-sidebar-enable");
            document.documentElement.setAttribute("data-sidebar-size", "lg");
        }
    }, [leftsidbarSizeType]);

    useEffect(() => {
        window.addEventListener("resize", resizeSidebarMenu, true);
    }, [resizeSidebarMenu]);

    const handleSubmenuClick = (submenuId) => {
        setActiveSubmenu((prevState) => (prevState === submenuId ? null : submenuId));
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        const initMenu = () => {
            const ul = document.getElementById("navbar-nav");
            const items = ul.getElementsByTagName("a");
            const itemsArray = Array.from(items);
            removeActivation(itemsArray);
            
            const matchingMenuItem = itemsArray.find((x) => x.pathname === path);
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem);
            }
        };

        if (layoutType === "vertical") {
            initMenu();
        }
    }, [path, layoutType]);

    function activateParentDropdown(item) {
        item.classList.add("active");
        const parentCollapseDiv = item.closest(".collapse.menu-dropdown");

        if (parentCollapseDiv) {
            const parentId = parentCollapseDiv.getAttribute("data-id");
            setActiveSubmenu(parentId);  // Set the active submenu based on the parent ID
            parentCollapseDiv.classList.add("show");
            parentCollapseDiv.parentElement.children[0].classList.add("active");
            parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");

            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
            }
        }
    }

    const removeActivation = (items) => {
        items.forEach((item) => {
            item.classList.remove("active");
            if (item.classList.contains("nav-link") && item.nextElementSibling) {
                item.nextElementSibling.classList.remove("show");
            }
            item.setAttribute("aria-expanded", false);
        });
    };

    return (
        <React.Fragment>
            {(navData || []).map((item, key) => (
                <React.Fragment key={key}>
                    {item['isHeader'] ? (
                        <li className="menu-title"></li>
                    ) : (
                        item.subItems ? (
                            <li className="nav-item">
                                <Link
                                    onClick={() => handleSubmenuClick(item.id)}
                                    className={`nav-link menu-link ${activeSubmenu === item.id ? 'active' : ''}`}
                                    to={item.link ? item.link : "/#"}
                                    data-bs-toggle="collapse"
                                >
                                    <i className={item.icon}></i>
                                    <span data-key="t-apps">{props.t(item.label)}</span>
                                    {item.badgeName && (
                                        <span className={`badge badge-pill bg-${item.badgeColor}`} data-key="t-new">
                                            {item.badgeName}
                                        </span>
                                    )}
                                </Link>
                                <Collapse className="menu-dropdown" isOpen={activeSubmenu === item.id} data-id={item.id}>
                                    <ul className="nav nav-sm flex-column">
                                        {item.subItems.map((subItem, subKey) => (
                                            <li key={subKey} className="nav-item">
                                                <Link
                                                    className="nav-link"
                                                    to={subItem.link || "/#"}
                                                >
                                                    - {props.t(subItem.label)}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Collapse>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link
                                    className="nav-link menu-link"
                                    to={item.link ? item.link : "/#"}
                                >
                                    <i className={item.icon}></i>
                                    <span>{props.t(item.label)}</span>
                                    {item.badgeName && (
                                        <span className={`badge badge-pill bg-${item.badgeColor}`} data-key="t-new">
                                            {item.badgeName}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        )
                    )}
                </React.Fragment>
            ))}
            <div className="logout">
                <li className="nav-item">
                    <Link className="nav-link menu-link" to="/logout">
                        <i className="ri-logout-box-r-line"></i>
                        <span>Logout</span>
                    </Link>
                </li>
            </div>
        </React.Fragment>
    );
};

VerticalLayout.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
};

export default withRouter(withTranslation()(VerticalLayout));
