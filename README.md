# wetbat-next

## API 🗜

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

The only issue here is that Graphcms works with 'Content Stages', what means that when we push content from our UI, we need to go inside the Graphcms dashboard and 'approve' the content, so then this content will receive the 'Content Stage: PUBLISHED', and we will be able to see the content on our UI Table; This happens because i am using the free version, on the paid version is possible to manage that and publish the content straight from our UI;

The quotes information are returned from the API using a Mutation called 'CreateQuote'

The video below shows how this actually works:

## Search for Airports ✈

On the form, the fields 'from' and 'destination' are searchboxes that search inside 'world-airports-directory' api, available on the Rapid API (https://rapidapi.com/hub) website, and the selected value is passed as argument.
 
  
 ## 💻 Applied technologies

The project was developed using the following technologies:

 ## NextJS 🔺 (https://nextjs.org/)
 ## Styled-components 💅(https://styled-components.com/)
 ## Graphcms 📡 (https://app.graphcms.com/)
 ## RapidAPI 🐙 (https://rapidapi.com/)
