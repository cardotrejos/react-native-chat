import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("URL on Azure")
    .withAutomaticReconnect()
    .build()

export default connection