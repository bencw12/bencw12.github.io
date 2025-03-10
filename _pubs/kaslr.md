---
title: KASLR in the age of microVMs
name: kaslr
year: 2023
conference: EuroSys '22
authors: ["Benjamin Holmes", "Jason Waterman", "Dan Williams"]
---

_________________

## Abstract

Address space layout randomization (ASLR) is a widely used component of computer security aimed at 
preventing code reuse and/or data-only attacks. Modern kernels utilize kernel ASLR (KASLR) and 
finer-grained forms, such as functional granular KASLR (FGKASLR), but do so as part of an 
inefficient bootstrapping process we call bootstrap self-randomization. Meanwhile, under 
increasing pressure to optimize their boot times, microVM architectures such as AWS Firecracker 
have resorted to eliminating bootstrapping steps, particularly decompression and relocation from 
the guest kernel boot process, leaving them without KASLR. In this paper, we present in-monitor 
KASLR, in which the virtual machine monitor efficiently implements KASLR for the guest kernel by 
skipping the expensive kernel self-relocation steps. We prototype in-monitor KASLR and FGKASLR in 
the open-source Firecracker virtual machine monitor demonstrating, on a microVM configured kernel, 
boot times 22% and 16% faster than bootstrapped KASLR and FGKASLR methods, respectively. We also 
show the low overhead of in-monitor KASLR, with only 4% (2 ms) increase in boot times on average 
compared to a kernel without KASLR. We also discuss the implications and future opportunities for 
in-monitor approaches.
