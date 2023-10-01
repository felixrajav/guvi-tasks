// Q1. Find all the topics and tasks which are thought in the month of October

admin.attendance.find(
    {
      $and: [
        { class_date: { $gte: '2023-10-01',$lt:'2023-11-1' } },
      ],
    },
    { topic: 1, task_name: 1,_id:0 }
  );

  // Q2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
  
admin.company_drives.find({
    $and: [
      { drive_date: { $gte: ISODate("2020-10-15") } },
      { drive_date: { $lte: ISODate("2020-10-31") } },
    ],
  });

 //Q3. Find all the company drives and students who are appeared for the placement.

admin.company_drives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "drive_attended_stud",
        foreignField: "user_id",
        as: "results",
      },
    },
  ]);
  
  //Q4. Find the number of problems solved by the user in codekata. We will get the answer in countp
  admin.users.aggregate([
    {
      $lookup: {
        from: "codekata",
        localField: "user_id",
        foreignField: "solved_users",
        as: "results",
      },
    },
    { $match: { user_id: 1 } },
    { $project: { results: 1, _id: 0 } },
    { $project: { countp: { $size: "$results" } } },
  ]);
  
  //Q5:  Find all the mentors with who has the mentee's count more than 15
  
  admin.mentors.find({ $expr: { $gt: [{ $size: "$mentees" }, 15] } });
  
  // Q6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
 
  let result = db.attendance.aggregate([
    {
      $match: {
        $and: [
          { class_date: { $gte: ISODate("2020-10-15") } },
          { class_date: { $lte: ISODate("2020-10-31") } },
        ],
      },
    },
    {
      $project: {
        allvalues: { $setUnion: ["$students_attended", "$task_submitted_stud"] },
      },
    },
    { $project: { allvalues: 1, _id: 0 } },
    { $unwind: "$allvalues" },
    { $group: { _id: 0, allvalues: { $addToSet: "$allvalues" } } },
    { $project: { allvalues: 1, _id: 0 } },
  ]);
  
  let { allvalues } = result;

  db.users.find({ user_id: { $nin: allvalues } }).count();