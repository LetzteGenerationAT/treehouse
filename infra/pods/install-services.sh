#!/usr/bin/env bash

UNIT_SEARCH_PATH=/etc/containers/systemd/users/0

if ! mkdir -p "$UNIT_SEARCH_PATH"; then
  exit 1
fi

printf 'Installing service files to `%s'\''...\n' "$UNIT_SEARCH_PATH"

for file in $(dirname "$0")/{*.container,*.volume,*.network,*.pod,*.kube}; do
  if [ -f "$file" ]; then
    printf '%s\n' "$file"
    # printf '%s\n' "ln --symbolic --interactive --target-directory=$UNIT_SEARCH_PATH $file"
    ln --symbolic --interactive --target-directory="$UNIT_SEARCH_PATH" "$file"
  fi
done

printf 'Reload services to start units: `systemctl daemon-reload'\''\n'
