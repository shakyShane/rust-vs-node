#!/usr/bin/env bash
echo "Rust:"
time ./target/debug/bench
echo "Node:"
time node loop.js
