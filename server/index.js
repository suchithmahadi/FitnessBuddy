var express = require('express');
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import { google } from './config';

var app = express();

app.listen('8000', ()=>{
    console.log("Running on port 8000");
});