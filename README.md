# Musical World

Musical World is a PHP-based web application that allows users to register, upload their own songs, listen to already uploaded tracks, and maintain a favorite songs list. The application features both a User Portal and an Admin Control Panel.

---

## Features
- **User Authentication**: Secure registration and login mechanism with email verification.
- **Song Uploads**: Users can upload audio files along with cover images.
- **Favorites Management**: Add/remove tracks from a personalized favorite list.
- **Admin Panel**: Manage categories, song databases, and system configurations.
- **DBMS Optimization**: Implements database triggers and stored procedures for efficient data management.

---

## Database Setup & Configuration

1. **Create Database**: Create a database named `musical_world` on your MySQL server (using XAMPP, WAMP, or any other server stack).
2. **Import Schema**: Import the `database/tables.sql` file into your database to create the necessary tables.
3. **Database Triggers**:
   Run the following trigger at your database back-end to keep track of user uploads/contributions:
   ```sql
   CREATE TRIGGER `IncrementCount` AFTER INSERT ON `upload_albums`
   FOR EACH ROW 
   UPDATE user SET user.contributions = user.contributions + 1 
   WHERE new.singer_id = user.user_id;
   ```
4. **Stored Procedures**:
   Run the following stored procedure code to enable song uploads:
   ```sql
   DELIMITER $$
   CREATE DEFINER=`root`@`localhost` PROCEDURE `uploadsongs`(
       IN `singer_id` INT(11), 
       IN `song_name` VARCHAR(255), 
       IN `song_format` VARCHAR(255), 
       IN `singer_name` VARCHAR(255), 
       IN `song_image` VARCHAR(255), 
       IN `audio_file` VARCHAR(255)
   )
   NO SQL
   BEGIN
       INSERT INTO upload_albums(`singer_id`,`song_name`,`song_format`,`singer_name`,`song_image`,`audio_file`) 
       VALUES(singer_id,song_name,song_format,singer_name,song_image,audio_file);
   END$$
   DELIMITER ;
   ```

---

## Configuration & Credentials

### SMTP Email Configuration
To send confirmation and password reset emails:
1. Open [validate.php](file:///d:/BACKUP/projects/PHP%20project/Musical-World/validate.php) and [activate_email.php](file:///d:/BACKUP/projects/PHP%20project/Musical-World/activate_email.php).
2. Set your SMTP host credentials (username and password) where prompted in the code.

### Admin Panel Credentials
* **Username/Email**: `vijaymahes9080@gmail.com`
* **Password**: `vijay123`

---

## Screenshots

![User Interface](https://user-images.githubusercontent.com/38497682/52524811-476dc100-2cc7-11e9-9269-acc1bf00997c.png)

![Song Library](https://user-images.githubusercontent.com/38497682/52524822-610f0880-2cc7-11e9-8ad6-ff56945583d0.png)

![Dashboard](https://user-images.githubusercontent.com/38497682/52524832-80a63100-2cc7-11e9-902a-62b0b52d14a1.png)
