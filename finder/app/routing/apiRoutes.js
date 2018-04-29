// app.get("/api/friends", function(req, res) {
//     var chosen = req.params.friends;

//     if (chosen) {
//         console.log(chosen);

//         for (var i = 0; i < friends.length; i++) {
//             if (chosen === friends[i].routeName) {
//                 return res.json(friends[i]);
//             }
//         }
//         return res.json(false);
//     }
//     return res.json(friends);
// });

// app.post("/api/friends", function(req, res) {
//     var newfriend = req.body;
//     newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newfriend);

//     friends.push(newfriend);

//     res.json(newfriend);
//   });