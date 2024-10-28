import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 private reservations: Reservation[] = [];

 constructor () {
  const storedReservations = localStorage.getItem('reservations');
  if (storedReservations) {
    this.reservations = JSON.parse(storedReservations);
  }
 }

 //CRUD
 //Create
 addReservation(reservation: Reservation) {
  let id = Math.random().toString(36).substr(2, 9);
  reservation.id = id;
  this.reservations.push(reservation);
  localStorage.setItem('reservations', JSON.stringify(this.reservations));
 }
 //Read
 getReservations(): Reservation[] {
  return this.reservations;
 }
 getReservation(id: string):Reservation{
  return this.reservations.find(r => r.id === id)!;
 }
 //Update
 updateReservation(reservation: Reservation) {
  const index = this.reservations.findIndex(r => r.id === reservation.id);
  this.reservations[index] = reservation;
  localStorage.setItem('reservations', JSON.stringify(this.reservations));

 }
 //Delete
 deleteReservation(id: string) {
  console.log(id,this.reservations);
  
    this.reservations = this.reservations.filter(r => r.id !== id);
    console.log(this.reservations, "after delete");
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
 }

}
