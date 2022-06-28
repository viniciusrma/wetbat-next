# Wet Bat Next

# 🗜 API 

The API was developed using Graphcms (https://graphcms.com/), with the following Schema:

```sh

{
  from: String;
  departureDate: Date;
  destination: String;
  returnDate: Date;
  people: Int;
  transport: Boolean;
  name: String;
  email: String;
}

```

The only issue here is that Graphcms works with 'Content Stages', what means that when we push content from our UI, the data receives 'Content Stage: DRAFT', and we need to go inside the Graphcms dashboard and 'approve' the content, so then this content will receive the 'Content Stage: PUBLISHED', and we will be able to see the content on our UI Table;

This happens because i am using the free version, on the paid version it is possible to manage that and publish the content straight from our UI;

The quotes information are returned from the API using a Mutation called 'CreateQuote'

The video below shows how this actually works:

# ✈ Search for Airports 

### STATUS 06/28 => Limit of 500 requests/day exceeded on 06/28. I put back the regular string input (the one that doesn't look up the API - it depends on user input). Will be available again on 29/06.

On the form, the fields 'from' and 'destination' are searchboxes that search inside 'world-airports-directory' api, available on the Rapid API (https://rapidapi.com/hub) website, and the selected value is passed as argument.

# 💻 Applied technologies

The project was developed using the following technologies:

### NextJS 🔺 (https://nextjs.org/)

### Styled-components 💅(https://styled-components.com/)

### Graphcms 📡 (https://app.graphcms.com/)

### RapidAPI 🐙 (https://rapidapi.com/)

# ⁉ How to use

---

### **Steps**

1. Cloning the application:

```sh

$ git clone ## ⁉ How to use

### **Prerequisites**

- It is necessary to have the **[Node.js](https://nodejs.org/en/)** installed
- It is necessary to have a package manager installed, like **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)**

---

### **Steps**

1. Cloning the application:

```sh

$ git clone https://github.com/viniciusrma/wetbat-next

```

2. Running the Application:

```sh

$ yarn or yarn add
then
$ yarn dev - runs in dev mode

---

$ yarn build
then
$ yarn start - runs 'production/builded' mode

```
---

<h4  align="center">
Made with ❤ by <a  href="https://www.linkedin.com/in/viniciusrma/"  target="_blank">Vinícius Morais</a>
</h4>

