import {useState} from 'react';
import { Redirect } from 'expo-router';
export default function index() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
  <Redirect href = {!isLoggedIn? "/(routes)/onboarding/index" : "/(routes)/home/index"} />
  );
}
