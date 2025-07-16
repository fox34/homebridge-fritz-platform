<p align="center">
    <img src="https://github.com/fox34/homebridge-fritz-platform/blob/master/docs/images/fb_logo.png" height="200">
</p>

# homebridge-fritz-platform

This is a somewhat maintained and cleaned up fork of the seemingly abandoned `homebridge-fritz-platform`, originally written by [SeydX](https://github.com/seydx).

## Introduction

This plugin allows control of AVM hardware, e.g. toggling WiFi, controlling smart home and more.
See (below)[#Full-Feature-List] for a full list of supported features.


## Prerequisites

Obviously, you need a AVM device you want to connect.
Before you can use this plugin, you must configure your AVM device (e.g. FRITZ!Box):

- Create a dedicated user for this plugin: [English docs](https://fritzhelp.avm.de/help/en/FRITZ-Box-7590/avm/024p1/hilfe_system_userkonto), [German docs](https://fritzhelp.avm.de/help/de/FRITZ-Box-7590/avm/024p1/hilfe_system_userkonto)
  * Enable all permissions for this plugin to work correctly. <!-- TODO: Check which permissions are really necessary for which features. -->
- Allow Access to the Home Network for Apps and Applications (enable TR-064): [English docs](https://fritzhelp.avm.de/help/en/FRITZ-Box-7590/avm/024p1/hilfe_netzwerk_freigabe_apps), [German docs](https://fritzhelp.avm.de/help/de/FRITZ-Box-7590/avm/024p1/hilfe_netzwerk_freigabe_apps)
- Enable Transmission of Status Information over UPnP: [English docs](https://fritzhelp.avm.de/help/en/FRITZ-Box-7590/avm/024p1/hilfe_statusinfo_upnp_uebertragen), [German docs](https://fritzhelp.avm.de/help/de/FRITZ-Box-7590/avm/024p1/hilfe_statusinfo_upnp_uebertragen)


## Further Documentation

- [Configuring Callmonitor](https://github.com/fox34/homebridge-fritz-platform/blob/master/docs/Callmonitor.md)
- <u>Examples</u>
   * [Example config.json](https://github.com/fox34/homebridge-fritz-platform/blob/master/example/example-config.json)
   * [Telegram Notification instructions](https://github.com/fox34/homebridge-fritz-platform/blob/master/docs/Telegram.md)


## Troubleshooting

If you have any problems with this plugin and you can not find a solution, please feel free to open a issue.
Please provide debug logs by enabling debug logging in your configuration.


## Contributing

You can contribute to this homebridge plugin in following ways:

- [Report issues](https://github.com/fox34/homebridge-fritz-platform/issues) and help verify fixes as they are checked in.
- Review [pull requests](https://github.com/fox34/homebridge-fritz-platform/pulls).
- Contribute bug fixes.
- Contribute changes to extend the capabilities
- Pull requests are accepted.

This Plugin uses modules from others, see [CONTRIBUTING](https://github.com/fox34/homebridge-fritz-platform/blob/master/CONTRIBUTING.md) for credits.


## Disclaimer

homebridge-fritz-platform is a hobby project of mine, provided as-is, with no warranty whatsoever.
I've been running it successfully at my home since 2023, but your mileage might vary.

All product and company names are trademarks™ or registered® trademarks of their respective holders.
Use of them does not imply any affiliation with or endorsement by them.


## Full Feature List

- **Fritz!Box**
  - Router status and switch functionality,
  - WLAN 2.4/5 GHz,
  - WLAN Guest,
  - WPS,
  - DECT,
  - Answering Machine,
  - Deflection,
  - Device LED,
  - Device Lock,
  - Ring Lock,
  - Phonebook,
  - Alarm,
  - Wakeup,
  - DNS Server
  - Broadband
  - Reconnect
  - Child Lock
  - Fallback Internet
- **Fritz!Repeater**
  - Repeater status and switch functionality,
  - WLAN 2.4/5 GHz,
  - WLAN Guest,
  - WPS,
  - Device LED,
  - Device Lock
- **Fritz!Fon**
  - Callmonitor (with adjustable filter for incoming/outgoing numbers),
  - FakeGato support
- **Fritz!DECT Buttons, Telekom Wandtaster**
  - Support for buttons with 1/4 channels
  - Temperature sensor with FakeGato,
  - Humidity sensor with FakeGato,
  - FakeGato support
- **Fritz!DECT Outlets, Fritz!Powerline Outlets**
  - Switch/Outlet status and switch functionality,
  - Power meter,
  - Temperature sensor with FakeGato,
  - Telegram notification when device is in use/not in use
  - FakeGato support
- **Fritz!DECT Lights**
  - Light status and switch functionality,
  - Brightness adjustment,
  - Color adjustment,
  - Apple adaptive lighting
- **Fritz!DECT Thermostats, Comet!DECT Thermostats**
  - Thermostat current state, target state, current temperature and target temperature state and switch functionality,
  - Temperature sensor,
  - Humidity sensor with FakeGato,
  - Window sensor (for window open functionality)
  - Open Window detection (to trigger manually open window)
  - FakeGato support
- **Rollotron DECT 1213/Blind/Shutter**
  - Position adjustment/status
- **HAN-FUN sensors (e.g. Deutsche Telekom)**
  - Contact state,
  - FakeGato support
- **Presence**
  - Detect occupancy through wifi,
  - Detect occupancy through guest wifi,
  - Fakegato support
- **Watch Network**
  - Control devices if connected or disconnected from network
- **Telegram**
  - Receive custom messages for occupancy detection (presence), device detection (watch network), incoming/outgoing calls (callmonitor), alarm, router state and outlet usage

