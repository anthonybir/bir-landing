# Portfolio review · ABN story

Date: 2026-09-04. Scope: read-only review of the top-level `~/Projects` portfolio,
with implementation inspection of the relevant operational and AI flows.
Purpose: ground the founder's public positioning correction, not certify releases.

## Finding

The repeated product is an operational system for leadership: connect records,
show a scoped picture of the organization, support a decision, assign work, and
follow up. AI is embedded in defined tasks. Education and church organizations
are evidence of that method, not the complete buyer definition.

The portfolio contains more than finished customer systems. Internal tools,
pilots, research and duplicate checkouts must remain separate from public cases.

## Evidence matrix

Paths below are relative to this document. **Pass** means the cited implementation
or document was present and inspected. It does not prove production activation,
current adoption, deployment parity or financial outcomes.

| Project | Evidence inspected | What it supports | Limit |
|---|---|---|---|
| AENA Admin | [BI semantic registry](../../AENA_Admin/lib/services/reports/bi-semantic-registry.ts), [Preguntar service](../../AENA_Admin/lib/ai/reports/bi-preguntar.service.ts) | Authorized datasets, explicit measures/populations, plan validation, explanations checked against returned rows | Pass: implementation. Live activation and task qualification: Not Proven |
| AENA Admin | [Leadership brief](../../AENA_Admin/lib/domain/coordinator/leadership-brief.ts), [leadership reading](../../AENA_Admin/lib/ai/coordinator/leadership-reading.service.ts) | Evidence, responsible people and follow-up; aggregate facts and constrained AI selection rather than invented narrative | Pass: implementation. No individual performance claims |
| IPUPY | [Transaction categorization](../../ipupy_admin/apps/web/src/app/actions/transaction-categorization.ts), [AI governance](../../ipupy_admin/apps/web/src/lib/ai/ai-governance.ts) | Authenticated scope, permitted accounting concepts, suggestions, fallback, model/prompt metadata | Pass: implementation. Logging is fallible; not universal audit assurance |
| Aula | [Context workspace](../../Aula/src/modules/gats/context-workspace.ts), [AI service](../../Aula/src/modules/ai/service.ts), [source processing](../../Aula/src/modules/gats/source-document-processing.ts) | Organizational sources/profiles, published prompt versions, source processing tied to course and organization | Pass: implementation. Not proof of every organization's configuration |
| AGET PY | [Dashboard](../../AGET_PY/lib/services/dashboard-service.ts), [cutover](../../AGET_PY/lib/services/cutover-core.ts) | Academic operational visibility, approval queues, and legacy record normalization | Pass: implementation. Current cutover completion: Not Proven |
| Venga Tu Reino | [README](../../Iglesia%20Venga%20Tu%20Reino/venga-tu-reino/README.md), [import rehearsal](../../Iglesia%20Venga%20Tu%20Reino/venga-tu-reino/src/lib/imports/create-import-rehearsal.service.ts) | Workflow from spreadsheets toward staged, reviewed imports and controlled records | Pilot. Not a published production customer success |
| Anthony's Workshop | [Consulting](../../Anthony's_Workshop/convex/ai/consulting.ts), [context assembly](../../Anthony's_Workshop/convex/ai/contextAssembly.ts) | Context-specific diagnostic/proposal drafts, controlled context budget and authenticated work | Internal tool, not client evidence |
| Traza | [README](../../Traza/README.md), [agent](../../Traza/src-tauri/src/agent.rs) | Bounded execution, local context, human confirmation as a tooling pattern | Internal tooling; no production claim |
| Kairos Live | [README](../../kairos_live/README.md) | Purpose-built live presentation workflow and offline behavior | Different workflow; do not imply AI where not established |
| MEC RAG Corpus | [README](../../MEC_RAG_Corpus/README.md) | Source normalization, citations, reproducible institutional context | Read-only pilot/research, not legal authority or proven production integration |

## Remaining top-level portfolio inventory

- ABSD_MCP, absd-engineering, abn-design-plugin and svg-to-png-api: shared engineering,
  design or technical infrastructure. Evidence of working method, not separate clients.
- Brand-Assets and Design_Systems_i_own: visual reference and design assets.
- Helpdesk-Research: proposed support work; do not describe as delivered.
- Local_Model and Ley-7593-Datos-Personales: research; no claim of universal local AI
  processing, regulatory certification or deployed legal compliance.
- AENA-IA-Artefactos: output collection; no private artifacts used in public copy.
- AENA_Admin-release, AENA_Admin-release-main-20260902 and AENA_Admin-simplify:
  alternate checkouts, not additional products or institutions.
- docs: shared operating standards. memory: personal context, not public evidence.
- bir-landing: public narrative and existing case claims; the local ABN operations
  architecture draft is a proposal, not a delivered customer system.
- IPUPY source is available at `~/Projects/ipupy_admin`; it was included for direct
  evidence of the already published church treasury case.

## Claim decisions

1. Lead with understanding the organization and making informed decisions.
2. Name Excel as a recognizable starting condition, not as the only import format
   or a claim that every project began in Excel.
3. Explain customization as institutional context, data, workflows, permissions and
   reviewed instructions. Do not imply bespoke model training.
4. Describe AI as task-specific assistance. Approvals and official records remain
   under application rules and authorized people.
5. Keep AENA and IPU Paraguay as public examples. Do not manufacture SME cases or
   announce internal projects as clients.
6. Preserve published outcome attribution: the AENA delinquency change is associated
   with three years of direct leadership, not claimed as an isolated AI effect.
7. The IPUPY README's larger church count conflicts with the public site's ~30.
   No count was changed on the basis of that README. Current outcome verification:
   **Not Proven** in this source review.
8. Remove the old provider/retention catalogue and unverified aggregate prompt/material
   counts from the AI marketing page. Explain stable method and inspected examples.

## Verification boundary

No other project's files were changed. No private databases, student artifacts,
customer records, credentials or deployment environments were queried. This review
supports truthful wording about the design and implementation; it is not a release
audit or an assurance that every described optional AI task is currently enabled.
