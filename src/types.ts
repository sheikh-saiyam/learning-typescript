// Union and Intersection types

// Union type

type ProductId = string | number;
type UserId = string | number;

function getProduct(id: ProductId) {
  console.log(`Fetching product based on id: ${id} || type: ${typeof id}`);
}

getProduct("1");
getProduct(2);

// Intersection type

type UserType = {
    id: UserId;
    username:string;
    email: string;
}

