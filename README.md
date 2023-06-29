# USSD App with Ngrok

This is a USSD (Unstructured Supplementary Service Data) application built using Node.js and Express. It allows users to select their favorite music genre and choose a song from that genre. The application is integrated with ngrok for local development and testing.

## Requirements

- Node.js
- Express
- ngrok

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/ussd-app.git
   ```

2. Install the dependencies:

   ```shell
   npm install
   ```

3. Start the local server:

   ```shell
   npm start
   ```

4. Expose the local server using ngrok:

   ```shell
   ngrok http 3000
   ```

   The ngrok tool will generate a public URL that tunnels requests to your local server.

5. Configure the USSD callback URL:

   - Copy the ngrok URL provided by the previous command.
   - Open your mobile operator's USSD platform or simulator.
   - Set the USSD callback URL to `http://<ngrok-url>/ussd/callback`.

6. Test the USSD application:

   - Use USSD simulator like Africa's talking to dial the USSD code associated with your application.
   - Follow the prompts to select a genre and choose a song.

## Customization

- To add more genres or songs, modify the code in the `router.post` handler of the Express application. Look for the comments indicating where to add genre-specific songs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

```
