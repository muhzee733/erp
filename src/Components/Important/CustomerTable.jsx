import React, { useMemo , useCallback} from "react";
import { Card, CardHeader } from "reactstrap";
import TableContainer from "../../Components/Common/TableContainer";
import { Link } from "react-router-dom";

const CustomerTable = () => {
  // Checked All
  const checkedAll = useCallback(() => {
    const checkall = document.getElementById("checkBoxAll");
    const ele = document.querySelectorAll(".customerCheckBox");

    if (checkall.checked) {
      ele.forEach((ele) => {
        ele.checked = true;
      });
    } else {
      ele.forEach((ele) => {
        ele.checked = false;
      });
    }
  }, []);
  const customers = [
    {
      id: 1,
      vendorName: "Janet Adebayo",
      email: "janet.a@mail.com",
      phone: "+2348065650633",
      orders: 10,
      orderTotal: "₦250,000.00",
      vendorSince: "12 Aug 2022 - 12:25 am",
      status: "Active",
    },
    {
      id: 2,
      vendorName: "Janet Adebayo",
      email: "janet.a@mail.com",
      phone: "+2348065650633",
      orders: 10,
      orderTotal: "₦250,000.00",
      vendorSince: "12 Aug 2022 - 12:25 am",
      status: "Active",
    },
    {
      id: 3,
      vendorName: "Janet Adebayo",
      email: "janet.a@mail.com",
      phone: "+2348065650633",
      orders: 10,
      orderTotal: "₦250,000.00",
      vendorSince: "12 Aug 2022 - 12:25 am",
      status: "Active",
    },
    {
      id: 4,
      vendorName: "Janet Adebayo",
      email: "janet.a@mail.com",
      phone: "+2348065650633",
      orders: 10,
      orderTotal: "₦250,000.00",
      vendorSince: "12 Aug 2022 - 12:25 am",
      status: "Active",
    },
    {
      id: 5,
      vendorName: "Janet Adebayo",
      email: "janet.a@mail.com",
      phone: "+2348065650633",
      orders: 10,
      orderTotal: "₦250,000.00",
      vendorSince: "12 Aug 2022 - 12:25 am",
      status: "Active",
    },
    {
        id: 6,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 7,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 8,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 9,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 10,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      }
  ];
  

  const columns = useMemo(
    () => [
      {
        header: (
          <input
            type="checkbox"
            id="checkBoxAll"
            className="form-check-input"
            onClick={() => checkedAll()}
          />
        ),
        cell: (cell) => {
          return (
            <input
              type="checkbox"
              className="customerCheckBox form-check-input"
              value={cell.getValue()}
            //   onChange={() => deleteCheckbox()}
            />
          );
        },
        id: "#",
        accessorKey: "id",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "Vendor Name",
        accessorKey: "vendorName", // Changed to match your data
        enableColumnFilter: false,
      },
      {
        header: "Email",
        accessorKey: "email",
        enableColumnFilter: false,
      },
      {
        header: "Phone",
        accessorKey: "phone",
        enableColumnFilter: false,
      },
      {
        header: "Orders",
        accessorKey: "orders",
        enableColumnFilter: false,
      },
      {
        header: "Order Total",
        accessorKey: "orderTotal",
        enableColumnFilter: false,
      },
      {
        header: "Vendor Since",
        accessorKey: "vendorSince", // Changed to match your data
        enableColumnFilter: false,
        // cell: (cell) => <>{handleValidDate(cell.getValue())}</>,
      },
      {
        header: "Status",
        accessorKey: "status",
        enableColumnFilter: false,
        // cell: (cell) => {
        //   switch (cell.getValue()) {
        //     case "Active":
        //       return <span className="badge text-uppercase bg-success-subtle text-success"> {cell.getValue()} </span>;
        //     case "Block":
        //       return <span className="badge text-uppercase bg-danger-subtle text-danger"> {cell.getValue()} </span>;
        //     default:
        //       return <span className="badge text-uppercase bg-info-subtle text-info"> {cell.getValue()} </span>;
        //   }
        // },
      },
    
    ],
    [customers]
  );

  return (
    <Card>
      <CardHeader>
        <h4 className="card-title">Customers</h4>
      </CardHeader>
      <TableContainer columns={columns} data={customers} />
    </Card>
  );
};

export default CustomerTable;
