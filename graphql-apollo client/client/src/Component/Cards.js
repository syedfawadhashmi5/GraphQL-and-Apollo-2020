import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_Cards = gql`
  query Cards {
    Cards {
      Id
      name
      age
      email
    }
  }
`;



function Cards() {
  const { loading, error, data } = useQuery(GET_Cards);

  if (loading) return <h1>Loading ...</h1>;

  if (error) return <h1>Error</h1>;

  console.log(data);

  const { Cards } = data;

  return (
    <div>
        <h1>Cards List</h1>
        <br />
      <table border="2" width="500">
        <tbody>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>age</th>
          </tr>
        </tbody>
        <tfoot>
          {Cards.map((card) => {
            return (
              <tr key={card.Id}>
                <td>{card.name}</td>
                <td>{card.email}</td>
                <td>{card.age}</td>
              </tr>
            );
          })}
        </tfoot>
      </table>
    </div>
  );
}

export default Cards;
