FROM node:18-alpine

#set the working directory
WORKDIR /app

#copy dependencies

COPY package*.json  .

#install dependencies

RUN npm install


#copy the rest of all file
COPY . .

#expose the app port
EXPOSE 3000

#command to start the application
CMD ["npm","start"]