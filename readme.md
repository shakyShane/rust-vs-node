to run the benchmarks you'll need node 4.x + rust 1.5 + 

```shell
cargo build
./bench.sh
```

I see `rust` being approx 7x faster for `100` loops over the nearly `3000` char file.

![bench](http://i.imgur.com/t0n4Tmh.png)
