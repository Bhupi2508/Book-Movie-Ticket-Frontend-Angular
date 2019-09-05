export type Instruction = {
    instructionId: String
    option: String
}

export type Query = {
    paymentInstruction: Instruction[];
}