# ParcelPanda API Documentation

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
