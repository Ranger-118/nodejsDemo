# DEMO

This is the demo for the nodeJs RESTful API


## Supertest Result

  **GET** /data/list/1
**GET** /data/list/1 200 5.398 ms - 42
    √ should get the sample list

  **POST** /data/list
**POST** /data/list 200 15.599 ms - 4
    √ should add the given list

  **PUT** /data/list
**PUT** /data/list 200 0.665 ms - 5
    √ should modify the given list

  **DELETE** /data/list/2
**DELETE** /data/list/2 200 0.428 ms - 5
    √ should delete the given list

  **GET** /data/list/1/item/1
**GET** /data/list/1/item/1 200 1.243 ms - 23
    √ should get the sample item

  **POST** /data/list/1/item
**POST** /data/list/1/item 200 0.741 ms - 4
    √ should add the given item

  **PUT** /data/list/1/item
**PUT** /data/list/1/item 200 0.581 ms - 5
    √ should modify the given item

  **DELETE** /data/list/1/item/1
**DELETE** /data/list/1/item/1 200 0.498 ms - 5
    √ should delete the given item


  8 *passing* (140ms)
