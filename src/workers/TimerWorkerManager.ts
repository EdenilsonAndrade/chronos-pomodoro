let instance: TimmerWorkerManager | null = null;

export class TimmerWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
  }

  static getInstance() {
    if (!instance) {
      return new TimmerWorkerManager();
    }
    return instance;
  }

  postMessage(message: any) {
    this.worker.postMessage(message);
  }

  onmessage(callback: (event: MessageEvent) => void) {
    this.worker.onmessage = callback;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
