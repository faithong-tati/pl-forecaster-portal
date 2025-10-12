import type { UserModel } from '@/core/types/models';
import type {
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';

export type PostUserParams = Omit<UserModel, 'id'>;

export type PostUserResponse = UserModel;

export type MutationOptionsPostUser = UseMutationOptions<
  PostUserResponse,
  unknown,
  PostUserParams
>;

export type MutationResultsPostUser = UseMutationResult<
  PostUserResponse,
  unknown,
  PostUserParams
>;
