db = db.getSiblingDB("longvi-db");
db.dropDatabase();

db.storage_files.insertMany([
    {
        "_id": ObjectId("000000000000000000000001"),
        "name": "DEFAULT_PROFILE_IMAGE.jpg",
        "path": "storage/default/DEFAULT_PROFILE_IMAGE.jpg",
        "mimeType": "image/jpeg",
        "uploadedBy": null,
        "size": 11924,
        "duration": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000002"),
        "name": "example-user-1.jpg",
        "path": "storage/examples/example-user-1.jpg",
        "mimeType": "image/jpeg",
        "uploadedBy": null,
        "size": 94445,
        "duration": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000003"),
        "name": "example-user-10.jpg",
        "path": "storage/examples/example-user-10.jpg",
        "mimeType": "image/jpeg",
        "uploadedBy": null,
        "size": 89946,
        "duration": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000004"),
        "name": "example-user-2.jpg",
        "path": "storage/examples/example-user-2.jpg",
        "mimeType": "image/jpeg",
        "uploadedBy": null,
        "size": 50597,
        "duration": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000005"),
        "name": "example-user-3.jpg",
        "path": "storage/examples/example-user-3.jpg",
        "mimeType": "image/jpeg",
        "uploadedBy": null,
        "size": 148289,
        "duration": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000006"),
        "name": "example-user-4.jpg",
        "path": "storage/examples/example-user-4.jpg",
        "mimeType": "image/jpeg",
        "uploadedBy": null,
        "size": 40856,
        "duration": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000007"),
        "name": "example-user-5.jpg",
        "path": "storage/examples/example-user-5.jpg",
        "mimeType": "image/jpeg",
        "uploadedBy": null,
        "size": 137691,
        "duration": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000008"),
        "name": "example-user-6.jpg",
        "path": "storage/examples/example-user-6.jpg",
        "mimeType": "image/jpeg",
        "uploadedBy": null,
        "size": 122997,
        "duration": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000009"),
        "name": "example-user-7.jpg",
        "path": "storage/examples/example-user-7.jpg",
        "mimeType": "image/jpeg",
        "uploadedBy": null,
        "size": 165835,
        "duration": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000010"),
        "name": "example-user-8.jpg",
        "path": "storage/examples/example-user-8.jpg",
        "mimeType": "image/jpeg",
        "uploadedBy": null,
        "size": 149895,
        "duration": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000011"),
        "name": "example-user-9.jpg",
        "path": "storage/examples/example-user-9.jpg",
        "mimeType": "image/jpeg",
        "uploadedBy": null,
        "size": 175596,
        "duration": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000012"),
        "name": "example-video-1.mp4",
        "path": "storage/examples/example-video-1.mp4",
        "mimeType": "video/mp4",
        "uploadedBy": null,
        "size": 648321,
        "duration": 10123,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000013"),
        "name": "example-video-2.mp4",
        "path": "storage/examples/example-video-2.mp4",
        "mimeType": "video/mp4",
        "uploadedBy": null,
        "size": 769021,
        "duration": 6083,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000014"),
        "name": "example-video-3.mp4",
        "path": "storage/examples/example-video-3.mp4",
        "mimeType": "video/mp4",
        "uploadedBy": null,
        "size": 588616,
        "duration": 9705,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000015"),
        "name": "example-video-4.mp4",
        "path": "storage/examples/example-video-4.mp4",
        "mimeType": "video/mp4",
        "uploadedBy": null,
        "size": 1067874,
        "duration": 14489,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
    {
        "_id": ObjectId("000000000000000000000016"),
        "name": "example-video-5.mp4",
        "path": "storage/examples/example-video-5.mp4",
        "mimeType": "video/mp4",
        "uploadedBy": null,
        "size": 3996640,
        "duration": 51223,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null
    },
]);

db.roles.insertMany([
    {
        "_id": ObjectId("000000000000000000000001"),
        "role": "guest",
        "description": "Người lạ, chưa có tài khoản trong hệ thống, không có thông tin cụ thể",
        "active": true,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000002"),
        "role": "customer",
        "description": "Khách hàng có thông tin cụ thể",
        "active": true,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000003"),
        "role": "employee",
        "description": "Nhân viên được cấp tài khoản trong hệ thống",
        "active": true,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000004"),
        "role": "admin",
        "description": "Quản trị viên hệ thống",
        "active": true,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000005"),
        "role": "draft-1",
        "description": "Vai trò nháp ở trạng thái vô hiệu hóa",
        "active": false,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000006"),
        "role": "draft-2",
        "description": "Vai trò nháp ở trạng thái vô hiệu hóa",
        "active": false,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
]);

db.positions.insertMany([
    
]);

db.users.insertMany([
    {
        "_id": ObjectId("000000000000000000000001"),
        "email": "e1@email.com",
        "phoneNumber": "01",
        "code": "LVI-00001",
        "password": "123",
        "roles": [
            ObjectId("000000000000000000000003")
        ],
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000002"),
        "email": "e2@email.com",
        "phoneNumber": "02",
        "code": "LVI-00002",
        "password": "123",
        "roles": [
            ObjectId("000000000000000000000003")
        ],
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000003"),
        "email": "e3@email.com",
        "phoneNumber": "03",
        "code": "LVI-00003",
        "password": "123",
        "roles": [
            ObjectId("000000000000000000000003")
        ],
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000004"),
        "email": "e4@email.com",
        "phoneNumber": "04",
        "code": "LVI-00004",
        "password": "123",
        "roles": null,
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000005"),
        "email": "e5@email.com",
        "phoneNumber": "05",
        "code": "AD-00005",
        "password": "123",
        "roles": [
            ObjectId("000000000000000000000004")
        ],
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000006"),
        "email": "e6@email.com",
        "phoneNumber": "06",
        "code": "AD-00006",
        "password": "123",
        "roles": [
            ObjectId("000000000000000000000004")
        ],
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
]);

db.employee.insertMany([]);

db.customers.insertMany([]);

db.menu_items.insertMany([
    {
        "_id": ObjectId("000000000000000000000001"),
        "name": "Món A",
        "images": "https://i.pinimg.com/1200x/2f/a5/40/2fa540e163519cc9e974a2dc2ff445cc.jpg",
        "category": "Danh mục",
        "description": "Mô tả",
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000002"),
        "name": "Món A",
        "images": "https://i.pinimg.com/1200x/2f/a5/40/2fa540e163519cc9e974a2dc2ff445cc.jpg",
        "category": "Danh mục",
        "description": "Mô tả",
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000003"),
        "name": "Món A",
        "images": "https://i.pinimg.com/1200x/2f/a5/40/2fa540e163519cc9e974a2dc2ff445cc.jpg",
        "category": "Danh mục",
        "description": "Mô tả",
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000004"),
        "name": "Món A",
        "images": "https://i.pinimg.com/1200x/2f/a5/40/2fa540e163519cc9e974a2dc2ff445cc.jpg",
        "category": "Danh mục",
        "description": "Mô tả",
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000005"),
        "name": "Món A",
        "images": "https://i.pinimg.com/1200x/2f/a5/40/2fa540e163519cc9e974a2dc2ff445cc.jpg",
        "category": "Danh mục",
        "description": "Mô tả",
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
    {
        "_id": ObjectId("000000000000000000000006"),
        "name": "Món A",
        "images": "https://i.pinimg.com/1200x/2f/a5/40/2fa540e163519cc9e974a2dc2ff445cc.jpg",
        "category": "Danh mục",
        "description": "Mô tả",
        "createdAt": ISODate(),
        "updatedAt": ISODate(),
        "deletedAt": null,
    },
]);