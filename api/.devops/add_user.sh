#!/bin/bash
set -e
set -x
dev_username=dockerdev


# Creates a user with the specified USER_ID if provided this ensures that files created in the container will be owned by the host user on Linux systems
if [ "$USER_ID" ]; then
  mkdir -p /home/$dev_username
  useradd --uid=$USER_ID --home-dir /home/$dev_username --shell /bin/bash --create-home $dev_username
  chown -R $dev_username /home/$dev_username
  chown -R $dev_username /var/www/api
fi