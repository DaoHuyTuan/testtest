## Project Progess
> **Important: The server side live on heroku but because i using free pack so the dyno of the project sometime will sleep**
### The Project Need
   > Note: You need have these thing before test these project 
   
   - NodeJS
   - PGadmin 4
   - nodemon
### Day 6/4/2019
- [X] Set Up Project
- [X] Finish Layout
### Day 7/4/2019
- [X] Finish Server + Postgres
- [X] View all Submit Info
- [X] Clear Function 
- [X] ADD new information to database
- [ ] Validate 

### Day 8/4/2019
- [ ] Validate
    + [X] Validate Name (> 3 charactor, No Special charactor, no Number)
    + [X] Validate Phone (no a-zA-Z, No special charactor, must have +84)
    + [X] Validate Description (not > 100 charactor && not < 10)
    + [X] Update List Page
    + [X] customize file input
    + [ ] Date picker
    + [X] Validate File (must < 2MB && size >= 250x150)
    + [ ] Validate DOB
- [ ] Optimize layout
### Day 9/4/2019
- [X] Optimize layout
- [X] Display status validate
### Day 10/4/2019
- [ ] Clear validate
- [X] Image preview
- [X] button send turn on
## Install  
  The project have 2 part 
  - Front End  
  - Back End 
#### Run local
  1. clone project: 
     - Clone Back end pack `git clone https://github.com/DaoHuyTuan/test_server.git`
     - run `npm install` to install necessary dependency
     - run `npm start` to start server
     - Clone Front End Pack `git clone https://github.com/DaoHuyTuan/testtest.git`
     - run `npm install` to install necessary dependency
     - run `npm start` to start server 
 2. Replace API end point 
    > because run local we need to change API to the local link (localhost:5000 for the server)
     - Use any Text Editor (recommend vscode) search string `https://testbadman.herokuapp.com/` and replace to your local host you want (you can find the localhost port on file `index.js` in backend pack) (ex: replace `https://testbadman.herokuapp.com/` into `localhost:5000`)
 3. Connect database 
    ```js
    user: "jlaqphzvtaxxiy",
    host: "ec2-184-73-216-48.compute-1.amazonaws.com",
    database: "dfgrfdjse5hont",
    password: "3dce4897c693a2574fc796c6cb9042ba1ff8a4cdaad83b0f86c461da28bdb906",
    port: 5432,
    ssl:true 
    ```
4. Structure DataBase

    || id   | name | dob | phone | content | image |
    |-------|------|------|-----|-------|---------|-------|
    |type data  | bigint |character varying     |  character varying (10)     |    character varying     |     character varying  |text   
## How i'm doing
   These is 3 big modules need to solve 
   - Fetch Data from database
   - Send new data to database
   - Validate form before send to database

   1. **Fetch Data from database**
      + Use 1 reducer to store state on the front end `inforReducer`
      + In inforReducer have a initState for default state 
      + In initState have a array which name `infor`
      + When Click on button `view all submit` will call function to fecth data from url end point
      + After that will dispatch action type ``VIEW_ALL_DATA``
      + Reducer will listen the action which have name ``VIEW_ALL_DATA`` and use `map` function to `push` every item fetched into the `infor` array and return ``newState``
      + Component `Main` use function `mapStateToProps` to map the global state in reducer `infor` into `props` after that use `map` function to render every single item
      + Router change Component into `ListPage` component which have our item fetched
   2. **Send new Data to Data Base**
      + Get User data on form by onChange function 
      + When click on button "SEND" will call function `sendData()` which have url end point `https://testbadman.herokuapp.com/send`
     and pass data to `body`
      + The server will get body from end point `https://testbadman.herokuapp.com/send` and connect to data base and send SQL query `Insert` to insert data to the database
   3. **Validate**
      + Use `redux-thunk` to dispatch a function to validate data before send action.type 
     
## Resource
- Server: 
    + **Run Live on**: https://testbadman.herokuapp.com/ 
    + **Tech Stack**: NodeJS, Express, PostgreSQL
    + **Github**: https://github.com/DaoHuyTuan/test_server
- Front End:
    + **Run Live On**: https://tuantestzalo.firebaseapp.com/
    + **Tech Stack**: ReactJS, Redux, Bootstrap
    + **Github**: https://github.com/DaoHuyTuan/testtest.git
