import { User } from "./user.model";



export interface LoginRequest{
  username: string;
  password: string;
}

export interface SignupRequest{
  username: string;
  email: string;
  password: string;
}

export interface JwtResponse{
    accessToken: string;
    refreshToken: string;
    tokenType: string;
    user : User;
}

export interface RefreshTokenRequest{
  refreshToken: string;
}

export interface MessageResponse{
  message: string;
}