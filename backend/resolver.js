const Hotel = require('./models/hotel');
const Booking = require('./models/booking');
const User = require('./models/user');

exports.resolvers = {
    Query: {
        getHotel: async (parent, args) => {
            return await Hotel.find({});
        },
        getHotelByID: async (parent, args) => {
            return await Hotel.findById(args.id);
        },
        getHotelByCity: async (parent, args) => {
            return await Hotel.find({"city" : args.city});
        },
        getHotelByName: async (parent, args) => {
            return await Hotel.find({"hotel_name" : args.hotel_name});
        },
        getBooking: async (parent, args) => {
            return await Booking.find({});
        },
        getUser: async (parent, args) => {
            return await User.find({});
        }
    },
    Mutation: {
        addHotel: async (parent, args) => {
            console.log(args)


            let newHotel = new Hotel({
                hotel_id: args.hotel_id,
                hotel_name: args.hotel_name,
                street: args.street,
                city: args.city,
                postal_code: args.postal_code,
                price: args.price,
                email: args.email,
                user_id: args.user_id,
            });
            return await newHotel.save();
        },
        addBooking: async (parent, args) => {
            console.log(args)


            let newBooking = new Booking({
                hotel_id: args.hotel_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                user_id: args.user_id,
            });
            return await newBooking.save();
        },
        addUser: async (parent, args) => {
            console.log(args)


            let newUser = new User({
                user_id: args.user_id,
                username: args.username,
                password: args.password,
                email: args.email,
            });
            return await newUser.save();
        },

        deleteHotel: async (parent, args) => {
            console.log(args)
            if (!args.id){
                return JSON.stringify({status: false, "message" : "No ID found"});
            }
            return await Hotel.findByIdAndDelete(args.id)
        },
    }
}