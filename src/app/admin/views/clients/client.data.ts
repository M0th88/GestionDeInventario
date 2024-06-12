export interface IClient {
  id: number;
  name: string;
  ip: string;
  pppoe: string;
  price: number;
}

export interface IColumn {
  field: string;
  headerName: string;
  width?: number;
  isEditable?: boolean;
  isSortable?: boolean;
  type?: string | number | boolean ;
}

export class TableData {


  public static readonly clients: IClient[] = [
    // {
    //   id: 1,
    //   name: 'Pedro 1',
    //   ip: '10.190.22.36',
    //   pppoe: 'Laptop',
    //   price: 29999,
    // },
    // {
    //   id: 2,
    //   name: 'Pedro 2',
    //   ip: '10.190.22.36',
    //   pppoe: 'Laptop PC',
    //   price: 1999,
    // },
    // {
    //   id: 3,
    //   name: 'Pedro 3',
    //   ip: '10.190.22.36',
    //   pppoe: 'Accessories',
    //   price: 99,
    // },
    // {
    //   id: 4,
    //   name: 'Pedro 4',
    //   ip: '10.190.22.36',
    //   pppoe: 'Watches',
    //   price: 199,
    // },
    // {
    //   id: 5,
    //   name: 'Pedro 5',
    //   ip: '10.190.22.36',
    //   pppoe: 'PC',
    //   price: 199,
    // },
    // {
    //   id: 6,
    //   name: 'Pedro 6',
    //   ip: '10.190.22.36',
    //   pppoe: 'Accessories',
    //   price: 399,
    // },
    // {
    //   id: 7,
    //   name: 'Pedro 7',
    //   ip: '10.190.22.36',
    //   pppoe: 'Tablet',
    //   price: 699,
    // },
    // {
    //   id: 8,
    //   name: 'Pedro 8',
    //   ip: '10.190.22.36',
    //   pppoe: 'Accessories',
    //   price: 99,
    // },
    // {
    //   id: 9,
    //   name: 'Pedro 9',
    //   ip: '10.190.22.36',
    //   pppoe: 'Accessories',
    //   price: 79,
    // },
    // {
    //   id: 10,
    //   name: 'Pedro 10',
    //   ip: '10.190.22.36',
    //   pppoe: 'Accessories',
    //   price: 29,
    // },
    // {
    //   id: 11,
    //   name: 'Pedro 11',
    //   ip: '10.190.22.36',
    //   pppoe: 'Tablet',
    //   price: 699,
    // },
    // {
    //   id: 12,
    //   name: 'Pedro 12',
    //   ip: '10.190.22.36',
    //   pppoe: 'Accessories',
    //   price: 99,
    // },
    // {
    //   id: 13,
    //   name: 'Pedro 13',
    //   ip: '10.190.22.36',
    //   pppoe: 'Accessories',
    //   price: 79,
    // },
    // {
    //   id: 14,
    //   name: 'Pedro 14',
    //   ip: '10.190.22.36',
    //   pppoe: 'Accessories',
    //   price: 29,
    // },
  ];
  public static  readonly columnData: IColumn[] = [
    {
      field: 'productname',
      headerName: 'product name',
      width: 25,
      isEditable: true,
      isSortable: false,
      
    },
    {
      field: 'color',
      headerName: 'Color',
      width: 25,
      isEditable: true,
      isSortable: false,
     
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 25,
      isEditable: true,
      isSortable: false,
   
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 25,
      isEditable: true,
      isSortable: false,
  
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 25,
      isEditable: true,
      isSortable: false,
   
    },
  ];

  public static readonly pageNumber: number[] = [1, 2, 3, 4, 5];
}
