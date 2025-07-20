// Generic API response handler - Project

interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

function fetchData<T extends object>(response: ApiResponse<T>): T {
  if (response.status === 200) {
    console.log("Success:", response.message);
    return response.data;
  } else {
    console.log("Error:", response.message);
    throw new Error(`${response.message}`);
  }
}

const userResponse = fetchData({
  status: 200,
  message: "User fetched successfully",
  data: {
    name: "Saiyam",
    email: "saiyamprogrammer@gmail.com",
  },
});

console.log(userResponse);

const productResponse = fetchData({
  status: 500,
  message: "Error while fetching data",
  data: {
    name: "Iphone",
  },
});
