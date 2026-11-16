# Independent QA report

Reviewed on November 16, 2026. The review covered the integrated feature branch build and the changes from baseline `95750bb`. The reviewer was an AI agent separate from the authors. Human technical review is pending.

## Disposition

| Severity | Open findings | Result |
| --- | --- | --- |
| Critical | 0 | The integrated build passed. The samples use labeled fictional systems and data. |
| Major | 0 | The authors corrected the containment, failure handoff, and diagnostic pass criteria. Both samples and the case study are reachable. |
| Minor | 1 | Long command lines in the network sample scroll inside the code block at mobile widths. The code remains reachable and the page stays within the viewport. |

## Findings resolved before integration

- The VM procedure now requires evidence of independent host network containment before boot and rechecks it at startup. An unexpected active interface or passthrough device triggers notification and rollback. A serial login timeout directs the operator to shut down the isolated candidate and escalate.
- The network procedure now rejects UDP DNS replies with the truncation flag and identifies an unexpected HTTPS peer as a reason to hold the change. It requires the regular hostname-based request to pass before closing the change.

## Evidence

| Check | Result |
| --- | --- |
| Build and CI | The integrated `npm run check` passed Markdown lint, YAML metadata validation, and the Docusaurus build with strict internal-link and anchor checks. The review workflow uses Node.js 22 with read-only repository permissions. The existing Pages workflow is unchanged. |
| Navigation and links | An independent parse found 18 rendered pages, 444 internal link occurrences with resolvable routes and anchors, and all 14 original canonical routes and heading IDs. In the browser, the mobile homepage card opened the recovery runbook, and the desktop Infrastructure Operations overview linked to both samples and the AI case study. |
| Writing styles | The lead exercised both controls on all 18 routes. Independent QA switched the network procedure from Microsoft to Google with the keyboard and compared the rendered command blocks. The blocks were identical. The new CLI samples share one technical procedure across styles. |
| Accessibility and responsive layout | Both new Mermaid diagrams rendered with titles, descriptions, and adjacent text equivalents. The homepage and both infrastructure samples fit a 375-pixel browser frame. The content viewport was 360 pixels after scrollbar allocation. The style control responded to arrow-key navigation, and its help opened on focus and closed on Escape. |
| Commands | All 16 Bash blocks passed `bash -n`. A temporary file verified the `sha256sum --check --strict` success and mismatch paths. In an independent curl 8.14.1 loopback test, valid TLS with HTTP 204 or 503 returned exit status 0. A hostname mismatch returned curl exit status 60. `getent ahostsv4 localhost` returned the loopback address. |
| Confidentiality and evidence | Manual review and a targeted pattern scan found no employer data, credential-shaped strings, or production targets in the new samples. The AI case study labels the local fixture, source review, simulated outputs, and pending human review separately. |

## Technical sources and limits

- The libvirt command reference confirms that `domiflist --inactive` reports the interfaces for the next boot and that `define --validate` checks the domain XML schema. The QEMU reference documents image comparison behavior. The GNU command manual and local checksum fixture support the digest gate. [libvirt command reference](https://www.libvirt.org/manpages/virsh.html) · [QEMU disk image utility](https://www.qemu.org/docs/master/tools/qemu-img.html) · [GNU checksum command manual](https://man7.org/linux/man-pages/man1/sha256sum.1.html)
- The path review used the Linux route manual, the BIND guide, the curl manual, and the standards that reserve the IP ranges and DNS suffix used in the sample. [Linux route lookup](https://man7.org/linux/man-pages/man8/ip-route.8.html) · [BIND 9 dig reference](https://bind9.readthedocs.io/en/stable/manpages.html#dig-dns-lookup-utility) · [curl manual](https://curl.se/docs/manpage.html) · [RFC 5737](https://www.rfc-editor.org/info/rfc5737/) · [RFC 2606](https://www.rfc-editor.org/info/rfc2606/)
- The review used source verification for libvirt, QEMU, and DNS queries. Those tools and an end-to-end test topology were unavailable. The environment denied the loopback route lookup at the netlink socket. The executed fixtures are limited to local files and loopback. The pull request records the separate GitHub Actions result.
