const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
     hotel_id: Float!
     hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
     user_id: Float!
   }
   type Booking{
     hotel_id: Float!
     booking_date: String!
     booking_start: String!
     booking_end: String!
     user_id: Float!
   }
   type User {
     user_id: Float!
     username: String!
     password: String!
     email: String!
   }

   type Query {
     getHotel: [Hotel]
     getHotelByID(id: Float!): Hotel
     getHotelByName(hotel_name: String!): [Hotel]
     getHotelByCity(city: String!): [Hotel]
     getBooking: [Booking]
     getUser: [User]
   }

   type Mutation {
     addHotel(hotel_id: Float!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        user_id: Float!): Hotel
        
   
     addBooking(hotel_id: Float!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        user_id: Float!): Booking

     addUser(user_id: Float!
        username: String!
        password: String!
        email: String!): User
     

     deleteHotel(id: Float!): Hotel
   }
`