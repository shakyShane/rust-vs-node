#!/usr/bin/env bash
cargo build --release
echo "Rust:"
time ./target/release/bench
echo ""
echo "Node:"
time node loop.js
