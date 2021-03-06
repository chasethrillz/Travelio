$(function () {

    ////SEARCH FOR HOTEL INDEX PAGE
    $('#search-form').on('submit', function () {
        event.preventDefault();

        var newSearch = {
            location: $('#hotel_location').val()
                .trim(),
            checkIn: $('#check_in').val()
                .trim(),
            checkOut: $('#check_out').val()
                .trim()

        };

        // if (newSearch.checkIn.value == '' || newSearch.checkOut.value == ''){

        // }
        // console.log(newSearch);


        var URL =
            '/search/' +
            newSearch.location +
            '/' +
            newSearch.checkIn +
            '/' +
            newSearch.checkOut;

        window.location.href = URL;
    });

    /// SENDS ID TO PURCHASE PAGE FROM ALLROOMS HBS
    $("#hotel-form").on('submit', function (event) {

        event.preventDefault();


        var hotelRoom = {
            roomId: $("#hotelRoomId").val()
        };



        console.log(hotelRoom);

        var URL = '/sale/' + hotelRoom.roomId;
        window.location.href = URL;
        // console.log(URL);

    });

    //// GET ROUTE FOR HOTEL BOOKING
    $('#my_Hotel').on('submit', function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var myHotel = {
            firstName: $('#firstName2')
                .val()
                .trim(),
            lastName: $('#lastName2')
                .val()
                .trim(),
            email: $('#email2')
                .val()
                .trim(),
            // dateOfbirth: $('#date_of_birth2')
            //     .val()
            //     .trim(),
            phoneNumber: $('#tel-input2')
                .val()
                .trim()

        };
        console.log(myHotel);

        var URL =
            '/bookedRoom/firstName/' +
            myHotel.firstName +
            '/lastName/' +
            myHotel.lastName + '/email/' +
            myHotel.email + '/phoneNumber/' + myHotel.phoneNumber;
        window.location.href = URL;

    });

    //// CREATE BOOKING FOR ROOM
    $('#book_room').on('submit', function () {
        event.preventDefault();

        var newbookedRoom = {
            refNumber: $("ref_Number").val(),
            firstName: $('#firstName').val().trim(),
            lastName: $('#lastName').val().trim(),
            dateOfBirth: $('#date_of_birth').val().trim(),
            phoneNumber: $('#tel-input').val().trim(),
            email: $('#email').val().trim(),
            HotelId: $("#hotelID").val()


        };
        console.log(newbookedRoom);


        $.ajax('/api/bookedRoom', {
            type: "POST",
            data: newbookedRoom
        }).then(
            function () {
                console.log("created new booked room");
                // Reload the page to get the updated list
                // location.reload();
            }
        );

        function roomInfo() {
            var URL =
                '/bookedRoom/firstName/' +
                newbookedRoom.firstName +
                '/lastName/' +
                newbookedRoom.lastName + '/email/' +
                newbookedRoom.email + '/phoneNumber/' + newbookedRoom.phoneNumber;


            window.location.href = URL;
        }
        setTimeout(function () { roomInfo(); }, 3500);




    });

    // DELETE BOOKING

    $("#delete-booking").on('submit', function (event) {

        event.preventDefault();
        var hotelRoom = {
            roomId: $("#hotelRoomId").val()
        };

        console.log(hotelRoom);

        // Send the DELETE request.
        $.ajax("/api/deleteBookings/" + hotelRoom.roomId, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted booking", roomId);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });











});


