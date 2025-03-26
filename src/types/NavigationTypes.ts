// đây là phần để yêu cầu truyền tham số của mỗi trang
export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  selectedSize: string;
  selectedColor: string;
};

export type RootStackParamList ={
  Home: undefined;// ở đây thì truyền vào trang home undefined hay là ko truyền gì cả
  DescriptionCard: undefined;
  SignUp: undefined;
  Detail: undefined;
  SignIn: undefined;
  Address: undefined;
  Cart: undefined;
  Checkout: { cartData: Product[] };
  Demo: undefined;
  Shipping: undefined;
  Favorite: undefined; 
  MyOrders: undefined;
  Account:undefined;
  ProfileScreen:undefined;
  changeProfile:undefined;
}