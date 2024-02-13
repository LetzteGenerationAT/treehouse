# Baumhaus Server Provisioning

This guide assumes SSH has been set up automatically

## Initial Setup

```bash
# Generate locales
#   de_{AT,CH,DE} en_{GB,US}
# Set default to None
dpkg-reconfigure locales

# Set hostname
hostnamectl set-hostname baumhaus.community

# Install updates
apt-get upgrade
apt-get upgrade

systemctl reboot
```

### Unattended upgrades

See https://wiki.debian.org/UnattendedUpgrades

```
# /etc/apt/apt.conf.d/50unattended-upgrades

...
Unattended-Upgrade::Mail "root";
Unattended-Upgrade::Automatic-Reboot "true";
Unattended-Upgrade::Automatic-Reboot-Time "03:00";
...
```

### Firewall

```bash
apt install ufw
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow in on wg0 to any    # See Wireguard
ufw enable
```

### Podman

```bash
apt install podman
```

Set up TCP socket:

```
# /etc/systemd/system/podman-tcp.service

[Unit]
Description=Podman TCP socket
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=1
ExecStart=/usr/bin/podman system service --time=0 tcp://0.0.0.0:37017

[Install]
WantedBy=multi-user.target
```

Enable service:

```bash
systemctl enable --now podman-tcp.service
```

### Wireguard

See https://github.com/hwdsl2/wireguard-install

```bash
# Allow connceting to TCP socket over wireguard
ufw allow in on wg0 to any
```

Aaaand my datacenterlight.ch VM doesn't support `x86_64-v2`, gotta wait for support

### Firewall

```bash
apt-get install ufw
ufw allow ssh
ufw default deny incoming
ufw default allow outgoing
ufw enable
```

```bash
apt-get install firewalld
firewall-cmd --list-services
```

### Install Cockpit

```bash
apt-get install cockpit
systemctl enable --now cockpit.socket
```

### Install Git

```bash
apt-get install git
```

### Install Podman

```bash
apt-get install podman
systemctl --user enable --now podman.socket
```

#### Enable TCP Socket

```bash
/etc/systemd/system/podman-tcp.service
```

```
[Unit]
Description=Podman TCP socket
After=network.target
StartLimitIntervalSec=0

[Service]
Type=simple
Restart=always
RestartSec=1
ExecStart=/usr/bin/podman system service --time=0 tcp://0.0.0.0:37017

[Install]
WantedBy=multi-user.target
```

### Connect to Podman remotely

ssh://root@baumhaus.community/run/user/1000/podman/podman.sock

### Install Authentik

```bash
helm repo add authentik https://charts.goauthentik.io

```
