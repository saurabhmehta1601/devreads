const { gql } = require("@apollo/client");

const allDevroutes = gql`
  query allDevroutes {
    devroutes {
      id
      name
      coursesByDevroute(order_by: { added_at: asc }) {
        id
        name
        description
        thumb_url
      }
    }
  }
`;
module.exports = { allDevroutes };
