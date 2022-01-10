export interface ValidateAccountUseCase {
    validate: (token: string) => Promise<void>
}