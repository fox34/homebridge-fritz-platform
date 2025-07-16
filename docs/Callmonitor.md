# Callmonitor

Fritz!Box supports the listening of incoming and outgoing calls via the port 1012.
This can be used to create automations that immediately contact you when you receive a call, even if you are not at home.
Via the built-in Telegram Notifications service, you can also conveniently send push notifications with your own text which can be created over the `config.json`.


## First steps

Before you can use Callmonitor you have to activate port **1012**.
You do that by calling the number **#96\*5*** with the phone which is connected to the FRITZ!Box.
That's it. (Port can be closed again at any time via the number **#96\*4***).

If you do not have a connected device, you can also do it via the phone book.
Activate "Phone Dialer" and then create a new entry with the phone number "#95\*5*" in the phone book.
Go back to the overview and click on the number with the mouse, the FRITZ!Box already calls the number and activates the port 1012



**1. Phone dialer**
![Dialer](https://raw.githubusercontent.com/fox34/homebridge-fritz-platform/master/docs/images/dialer.png)



**2. Enable port via phone book**
![PhoneBook](https://raw.githubusercontent.com/fox34/homebridge-fritz-platform/master/docs/images/ports_callmonitor.png)
