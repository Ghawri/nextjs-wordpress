// pages/api/posts.js

import mysql from 'mysql2/promise';

export  async function GET() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:"",
    database: 'medunit',
  });


    const [rows] = await connection.execute(
      "SELECT ID, post_title, guid FROM wp_posts"
    );
    return Response.json(rows);
}
