# chaseLabs

## answers for test

1)

**Async function return Promise, we'll have to call myFunc function with await:**\
[to the code](https://github.com/orabenesh/chaseLabs/blob/6679c00fe9832e312600be1a347dd021a1daf3fd/answer1.tsx#L14)

2)

**2 methods for solving:**\
[to the code](https://github.com/orabenesh/chaseLabs/blob/9eee7d5e0cde06c28193c9b79f355349ee786907/answer2.tsx)\
advantages and disadvantages of both implementations:

3) [to the code](https://github.com/orabenesh/chaseLabs/blob/63e954ab9aed5339958a7b5080df718edbd7d71d/answer3.html)

4)
If the goal is to get an array full of numbers returned from the server
We will not get it this way because the asynchronous functions will return us a promise and not a number and at the end of the operations we will get an array of promises and the second loop that waits for every value in the array of promises will not help.

[solving it](https://github.com/orabenesh/chaseLabs/blob/fd568e4fedb9c9ea6da5159d3a0a8c555b70e4af/answer4.tsx)

5) [express middleware](https://github.com/orabenesh/chaseLabs/blob/2324a2faedf0e6f32784f710c25847858fc1cbea/answers/answer5.js)

6)
a. there is no 5th element inside container\
b. li.mango{\
}\
c. [type~=green]{\
}

7) 
    *GET /users?ids={ids} - Get users by ids list (or instead of query list of ids to send it in request body)\
    *PUT /users/{id} - Replace a user by id (the new user object will be sent in request body)\
    *POST /users/list - Create new users (a list of users will be sent in request body)
8)  access token is a string that user uses to make requests from resource server,\
    when he's logged in he get it and thats what give him the ability to access the protected resource.\
    but because the token is expired after a certain time we use refresh token:\
    refresh token is a credential string that enable the user get a new token without needing of new authorization when token is expired.