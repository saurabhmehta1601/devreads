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
export default { allDevroutes };
