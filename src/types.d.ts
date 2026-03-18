interface Document {
  startViewTransition?: (updateCallback: () => void | Promise<void>) => { finished: Promise<void> };
}
