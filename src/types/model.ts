export {};
declare global {
  interface IBackendRes<T> {
    error?: string | string[];
    message: string | string[];
    statusCode: number | string;
    data?: T;
  }

  interface IRegister {
    _id: string;
  }

  interface IUserLogin {
    user: {
      _id: "67e1bc365fce311a8a7c6ea3";
      email: string;
      name: string;
      role: string;
      avatar: string;
      gender: string;
      address: any;
      status: string;
      verified: true;
      createdAt: any;
      updatedAt: any;
      refreshToken : any;
    };
    accessToken: string;
  }
}
