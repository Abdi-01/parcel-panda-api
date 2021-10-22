# ParcelPanda API Documentation

## Authentication

### Register
Request:
- Method: POST
- Endpoint: `/auth/regis`
- Body:
```json
{
    "username": "afiafi",
    "fullName": "Sulthana Safina",
    "email": "ssafinatunnajah@gmail.com",
    "password": "afi1234"
}
```
Response:
```json
{
    "success": true,
    "message": "registration success!"
}
```

### Login
Request:
- Method: POST
- Endpoint: `/auth/login`
- Body:
```json
{
    "username": "afiafi",
    "password": "afi1234"
}
```
Response:
```json
{
    "id": 19,
    "username": "afiafi",
    "fullname": null,
    "email": "ssafinatunnajah@gmail.com",
    "password": "afi1234",
    "role": "user",
    "idstatus": 1,
    "otp": "b5hjh1",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInVzZXJuYW1lIjoiYWZpYWZpIiwiZnVsbG5hbWUiOm51bGwsImVtYWlsIjoic3NhZmluYXR1bm5hamFoQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiYWZpNDMyMSIsInJvbGUiOiJ1c2VyIiwiaWRzdGF0dXMiOjEsIm90cCI6ImI1aGpoMSIsImlhdCI6MTYyODU2Mzk2MCwiZXhwIjoxNjI4NjA3MTYwfQ.9Sw7jgi1kZU9f09K7fkHh6al37KmWBQa8QV-Wl6PMow"
}
```

### Verify
Request:
- Method: PATCH
- Endpoint: `/auth/verify`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
    "otp": "wvxlw7"
}
```
Response:
```json
{
    "message": "Account has been verified!"
}
```

### Update Password
Request:
- Method: PATCH
- Endpoint: `/auth/update-pass`
- Body:
```json
{
    "email": "ssafinatunnajah@gmail.com",
    "password": "afi4321"
}
```
Response:
```json
{
    "success": true,
    "message": "Your account has been updated!"
}
```

### Read User
Request:
- Method: GET
- Endpoint: `/auth/get`
Response:
```json
{
    "id": 19,
    "username": "afiafi",
    "fullname": null,
    "gender": null,
    "email": "ssafinatunnajah@gmail.com",
    "date_birth": null,
    "role": "user",
    "password": "afi4321",
    "idstatus": 1,
    "otp": "b5hjh1",
    "url_photo": null
}
```

## Profile

### Read profile
Request:
- Method: GET
- Endpoint: `/profile/`
- Header:
    - Authorization: Bearer Token
Response:
```json 
{
        "id": 2,
        "username": "tom",
        "fullname": "Tom Jerry",
        "gender": "Male",
        "email": "tom@gmail.com",
        "date_birth": "1996-01-17T17:00:00.000Z",
        "role": "admin",
        "idstatus": 1,
        "url_photo": "IMG1626958940299.jpg",
        "address": [
            {
                "id": 6,
                "label": "Apartmen",
                "recipient_name": "Jerry",
                "phone_number": "08900880088",
                "idcity": 444,
                "city": "Surabaya",
                "postal_code": "61010",
                "address": "Jl. HR Muhammad"
            },
            {
                "id": 7,
                "label": "Kos",
                "recipient_name": "Ido",
                "phone_number": "021200200",
                "idcity": 23,
                "city": "Bandung",
                "postal_code": "68100",
                "address": "Jl. Javascript"
            }
        ]
    }
```

### Update profile
Request:
- Method: PATCH
- Endpoint: `/profile/update-data`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
  "fullname": "Tom Jerry",
  "gender": "Male",
  "date_birth": "1996-01-18"
}
```
Response:
```json
{
    "message": "profile has been updated"
}
```

### Add address
Request:
- Method: POST
- Endpoint: `/profile/add-address`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
  "id": 22,
  "label": "Apartment",
  "recipient_name": "Alice",
  "phone_number": "021200200",
  "idcity": 100,
  "postal_code": 12000,
  "address": "Raccoon City"
}
```
Response:
```json
{
    "message": "address has been added"
}
```

### Update address
Request:
- Method: PATCH
- Endpoint: `/profile/update-address`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
  "fullname": "Tom Jerry",
  "gender": "Male",
  "date_birth": "1996-01-18"
}
```
Response:
```json
{
    "message": "address has been updated"
}
```

### Delete address
Request:
- Method: DELETE
- Endpoint: `/profile/delete-address/:id`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
  "fullname": "Tom Jerry",
  "gender": "Male",
  "date_birth": "1996-01-18"
}
```
Response:
```json
{
    "message": "address has been updated"
}
```

### Read city
Request:
- Method: GET
- Endpoint: `/profile/city`
- Header:
    - Authorization: Bearer Token
Response:
```json
[
    {
        "idcity": 1,
        "city": "Aceh Barat"
    },
    {
        "idcity": 2,
        "city": "Aceh Barat Daya"
    },
    {
        "idcity": 3,
        "city": "Aceh Besar"
    },
    {
        "idcity": 4,
        "city": "Aceh Jaya"
    },
    {
        "idcity": 5,
        "city": "Aceh Selatan"
    }
]
```
## Parcel and Product Page (User Side)

### Read Parcel
Request:
- Method: GET
- Endpoint: `/parcel/get-parcel`
Response:
```json 
{
    "id": 1,
    "title": "5 foods",
    "price": 500000,
    "url": "1waCewfz3ho3sOU7fCfuzCySC3Bgrti6s",
    "detail": [
        {
            "id": 1,
            "idparcel_type": 1,
            "idcategory": 1,
            "max_qty": 5
        }
    ],
    "category": [
        "idcategory=1"
    ]
}
```

### Read Parcel Type
Request:
- Method: GET
- Endpoint: `/parcel/getParcel-type`
Response:
```json 
{
        "id": 1,
        "idparcel_type": 1,
        "idcategory": 1,
        "max_qty": 5,
        "price": 500000
    }
```

### Read Product
Request:
- Method: GET
- Endpoint: `/product`
Response:
```json 
{
    "id": 1,
    "name": "Hershey Chocolate Kisses Milk Almoond",
    "idcategory": 1,
    "idstatus": 3,
    "stock": 12,
    "price": 65000,
    "url": "1.jpg",
    "category": "food"
}
```

### Manage Stock
Request:
- Method: PATCH
- Endpoint: `/product/manage-stock/:id`
- Body:
```json
{
    "stock": 12
}
```
Response:
```json 
{
    "message": "product has been updated"
}
```

## Manage Product

### Read product
Request:
- Method: GET
- Endpoint: `/product-manage/read/:limit/:offset?{query}`
- Header:
    - Authorization: Bearer Token
Response:
```json 
{
    "count": 69,
    "values": [
        {
            "id": 6,
            "name": "Whittaker's Peanut Butter Chocolate Block 220 gr",
            "idcategory": 1,
            "category": "food",
            "idstatus": 3,
            "status": "active",
            "stock": 18,
            "price": 79000,
            "url": "6.jpg"
        },
        {
            "id": 21,
            "name": "White Rabit Milk Tea 117 gr",
            "idcategory": 3,
            "category": "drinks",
            "idstatus": 3,
            "status": "active",
            "stock": 10,
            "price": 35000,
            "url": "21.jpg"
        },
        {
            "id": 3,
            "name": "Valor Dark Chocolate Sugar Free 100 gr",
            "idcategory": 1,
            "category": "food",
            "idstatus": 3,
            "status": "active",
            "stock": 20,
            "price": 52000,
            "url": "3.jpg"
        },
        {
            "id": 8,
            "name": "Toblerone Milk 200 gr",
            "idcategory": 1,
            "category": "food",
            "idstatus": 3,
            "status": "active",
            "stock": 20,
            "price": 68000,
            "url": "8.jpg"
        },
        {
            "id": 9,
            "name": "Sunkist Dry Roasted Pistachio 150 gr",
            "idcategory": 1,
            "category": "food",
            "idstatus": 3,
            "status": "active",
            "stock": 20,
            "price": 76000,
            "url": "9.jpg"
        }
    ]
}
```

### Add product
Request:
- Method: POST
- Endpoint: `/product-manage/add-product`
- Header:
    - Authorization: Bearer Token
- Form data:
```json
{
    "name": "Avocado Lampung",
    "idcategory": 2,
    "stock": "23",
    "price": 33000
}
```
Response:
```json 
{
    "message": "product has been added"
}
```

### Edit product
Request:
- Method: PATCH
- Endpoint: `/product-manage/edit-product`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
    "id": 51,
    "name": "Avocado Lampung",
    "idcategory": 2,
    "stock": "23",
    "price": 33000
}
```
Response:
```json 
{
    "message": "product has been updated"
}
```

### Delete product
Request:
- Method: DELETE
- Endpoint: `/product-manage/delete/:id`
- Header:
    - Authorization: Bearer Token
Response:
```json 
{
    "message": "product has been deleted"
}
```

## Manage Transaction

### Read transaction
Request:
- Method: GET
- Endpoint: `/transaction-manage/:limit/:offset?{query}`
- Header:
    - Authorization: Bearer Token
Response:
```json
{
    "count": 12,
    "values": [
        {
            "id": 1,
            "invoice": "#PP/16274480",
            "date_transaction": "2021-07-17T09:58:10.000Z",
            "date_payment": null,
            "username": "tom",
            "payment_status": "accepted",
            "amount": 2,
            "subtotal_parcel": 1000000,
            "idpayment_status": 3,
            "url_payment_image": "sample1.jpeg"
        },
        {
            "id": 2,
            "invoice": "#PP/16274481",
            "date_transaction": "2021-07-26T12:53:24.000Z",
            "date_payment": null,
            "username": "idoyudha",
            "payment_status": "ongoing",
            "amount": 1,
            "subtotal_parcel": 450000,
            "idpayment_status": 2,
            "url_payment_image": "sample2.jpeg"
        },
        {
            "id": 3,
            "invoice": "#PP/16274482",
            "date_transaction": "2021-07-26T12:53:24.000Z",
            "date_payment": null,
            "username": "idoyudha",
            "payment_status": "accepted",
            "amount": 1,
            "subtotal_parcel": 400000,
            "idpayment_status": 3,
            "url_payment_image": "sample3.jpeg"
        },
        {
            "id": 7,
            "invoice": "#PP/16274484",
            "date_transaction": "2021-07-28T05:35:44.000Z",
            "date_payment": null,
            "username": "tom",
            "payment_status": "ongoing",
            "amount": 1,
            "subtotal_parcel": 400000,
            "idpayment_status": 2,
            "url_payment_image": null
        },
        {
            "id": 8,
            "invoice": "#PP/16274485",
            "date_transaction": "2021-07-28T05:35:44.000Z",
            "date_payment": null,
            "username": "idoyudha",
            "payment_status": "accepted",
            "amount": 2,
            "subtotal_parcel": 800000,
            "idpayment_status": 3,
            "url_payment_image": null
        }
    ]
}
```

### Update transaction status
Request:
- Method: PATCH
- Endpoint: `/transaction-manage/action/:id?{query}`
- Header:
    - Authorization: Bearer Token
Response:
```json 
{
    "message": "transaction updated"
}
```

### Financial Report

### Revenue
Request:
- Method: GET
- Endpoint: `/financial-report/revenue?{query}`
- Header:
    - Authorization: Bearer Token
Response:
```json 
{
    "total": 5277000,
    "month": 2104000,
    "day": 1132000,
    "filtered": null,
    "data": [
        {
            "date": "2021-07-16T17:00:00.000Z",
            "profit": 366000,
            "user_spent": 1000000
        },
        {
            "date": "2021-07-25T17:00:00.000Z",
            "profit": 498000,
            "user_spent": 850000
        },
        {
            "date": "2021-07-26T17:00:00.000Z",
            "profit": 444000,
            "user_spent": 800000
        }
    ],
    "top": [
        {
            "parcel": 3,
            "profit": 993000
        },
        {
            "parcel": 4,
            "profit": 537000
        },
        {
            "parcel": 2,
            "profit": 530000
        }
    ]
}
```

### Item
Request:
- Method: GET
- Endpoint: `/financial-report/item?{query}`
- Header:
    - Authorization: Bearer Token
Response:
```json 
{
    "total": 65,
    "month": 40,
    "day": 20,
    "filtered": 20,
    "data": [
        {
            "date": "2021-07-27T17:00:00.000Z",
            "amount": 10
        },
        {
            "date": "2021-07-28T17:00:00.000Z",
            "amount": 10
        },
        {
            "date": "2021-07-29T17:00:00.000Z",
            "amount": 5
        }
    ],
    "top": [
        {
            "category": "food",
            "total": 11
        },
        {
            "category": "drinks",
            "total": 7
        },
        {
            "category": "fruit",
            "total": 2
        }
    ]
}
```

## User Transaction

### Add to Cart
Request:
- Method: POST
- Endpoint: `/transaction/addCart`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
    "idparcel_type": 1,
    "subtotal": 500000
}
```
Response:
```json
[
    {
        "idcart": 113,
        "iduser": 19,
        "idparcel_type": 1,
        "idstatus": 1,
        "subtotal": 500000
    }
]
```

### Add to Parcel
Request:
- Method: POST
- Endpoint: `/transaction/addParcel`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
    "idcart": 113,
    "idparcel_type": 1,
    "idproduct": 1,
    "idcategory": 1,
    "amount": 2,
    "subtotal": 130000
}
```
Response:
```json
{
    "message": "Success!"
}
```

### Read Cart
Request:
- Method: GET
- Endpoint: `/transaction/getcart`
- Header:
    - Authorization: Bearer Token
Response:
```json
[
    {
        "idcart": 113,
        "iduser": 19,
        "idparcel_type": 1,
        "idstatus": 1,
        "subtotal": 500000,
        "title": "5 foods",
        "detail": [
            {
                "id": 242,
                "idcart": 113,
                "iduser": 19,
                "idparcel_type": 1,
                "idproduct": 1,
                "idcategory": 1,
                "amount": 2,
                "subtotal": 130000,
                "name": "Hershey Chocolate Kisses Milk Almoond",
                "price": 65000,
                "title": "food",
                "url": "1.jpg"
            }
        ]
    }
]
```

### Read Cart Detail
Request:
- Method: GET
- Endpoint: `/transaction/getcart-detail`
- Header:
    - Authorization: Bearer Token
Response:
```json
[
    {
        "id": 242,
        "idcart": 113,
        "iduser": 19,
        "idparcel_type": 1,
        "idproduct": 1,
        "idcategory": 1,
        "amount": 2,
        "subtotal": 130000,
    }
]
```

### Checkout
Request:
- Method: POST
- Endpoint: `/transaction/checkout`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
    "invoice": "#PP/16289896",
    "amount": 1,
    "idaddress": 24,
    "subtotal_product": 325000,
    "subtotal_parcel": 500000,
    "ongkir": 9000,
    "total_payment": 334000,
    "idpayment_status": 2,
    "detail": [
        {
            "id": 242,
            "idcart": 113,
            "iduser": 19,
            "idparcel_type": 1,
            "idproduct": 1,
            "idcategory": 1,
            "amount": 5,
            "subtotal": 325000
        }
    ]
}
```
Response:
```json
{
    "success": true,
    "message": "Checkout Success'
}
```

### Read Transaction
Request:
- Method: GET
- Endpoint: `/transaction`
- Header:
    - Authorization: Bearer Token
Response:
```json
{
    "id": 19,
    "invoice": "#PP/16289896",
    "date_transaction": "2021-08-09T06:38:16.000Z",
    "date_payment": null,
    "iduser": 19,
    "idaddress": 24,
    "amount": 1,
    "subtotal_product": 325000,
    "subtotal_parcel": 500000,
    "ongkir": 9000,
    "total_payment": 334000,
    "idpayment_status": 2,
    "url_payment_image": null,
    "username": "afiafi",
    "address": "Taman Induk 44 Cipayung Depok",
    "phone_number": "081908144055",
    "title": "ongoing",
    "detail": [
        {
            "id": 27,
            "idtransaksi": 19,
            "idparcel_type": 1,
            "idproduct": 1,
            "idcategory": 1,
            "amount": 5,
            "parcel": 1,
            "name": "Hershey Chocolate Kisses Milk Almoond",
            "url": "1.jpg",
            "title": "food"
        }
    ]
}
```

### Update Quantity in Cart
Request:
- Method: PATCH
- Endpoint: `/transaction/update-qty`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
    "amount": 4,
    "idproduct": 1,
    "idcart": 116,
    "subtotal": 260000,
}
```
Response:
```json
{
    "status": "Success",
    "results": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 34,
        "warningCount": 0,
        "message": "(Rows matched: 1 Changed: 1 Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }
}
```

### Upload Payment
Request:
- Method: PATCH
- Endpoint: `/transaction/payment`
- Header:
    - Authorization: Bearer Token
- Form data:
```json
{
    "images": "92ea8d25-77a7-486a-8a8c-8b575cd4e7be.jpg",
    "data": "{id: 22, date_payment: 2021-08-09 15:22:48}" 
}
```
Response:
```json
{ "message": "Thankyou, We will process your payment" }
```

### Delete Cart
Request:
- Method: PATCH
- Endpoint: `/transaction/del-cart`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
    "idcart": 116
}
```
Response:
```json
{
    "status": "Success delete cart"
}
```

### Shipping Cost
Request:
- Method: POST
- Endpoint: `/ongkir/cost`
- Header:
    - Authorization: Bearer Token
- Body:
```json
{
    "origin": 152,
    "destination": 115,
    "weight": 1000
}
```
Response:
```json
[
    {
        "cost": [
            {
                "value": 8000,
                "etd": "2-3",
                "note": ""
            }
        ]
    },
    {
        "cost": [
            {
                "value": 9000,
                "etd": "1-2",
                "note": ""
            }
        ]
    },
    {
        "cost": [
            {
                "value": 18000,
                "etd": "1-1",
                "note": ""
            }
        ]
    }
]
```