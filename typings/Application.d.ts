declare interface ApplicationD {
  
  prepare: {
    done: {
      connections: boolean
      initializations: boolean
      resources: boolean
    }
    connections(): void
    initializations(): void
    resources(): void
  }
  
}

export default ApplicationD;
