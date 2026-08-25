declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    toolparamdescription?: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface FormHTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
  }
}

interface WebMCPTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (
    input: Record<string, unknown>,
    context: { signal: AbortSignal },
  ) => Promise<unknown> | unknown;
  annotations?: {
    readOnlyHint?: boolean;
  };
}

interface ModelContext {
  registerTool(
    tool: WebMCPTool,
    options?: { signal?: AbortSignal },
  ): Promise<void>;
}

declare global {
  interface Document {
    modelContext?: ModelContext;
  }
}

export {};
