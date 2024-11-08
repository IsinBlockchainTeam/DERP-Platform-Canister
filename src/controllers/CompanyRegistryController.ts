import { call, IDL, Principal, query, update } from 'azle';
import { CreateCanisterResult, CreateCanisterArgs } from 'azle/canisters/management';



type State = {
    createdCanisterId: Principal;
};
let state: State = {
    createdCanisterId: Principal.fromText('aaaaa-aa')
};
export class CompanyRegistryController{

    @update([], CreateCanisterResult)
    async executeCreateCanister(): Promise<CreateCanisterResult> {
        const createCanisterResult = await call(
            'aaaaa-aa',
            'create_canister',
            {
                paramIdlTypes: [CreateCanisterArgs],
                returnIdlType: CreateCanisterResult,
                args: [{ settings: [], sender_canister_version: [] }],
                payment: 8_692_307_692n
            }
        );
        state.createdCanisterId = createCanisterResult.canister_id;

        return createCanisterResult;
    }

    // @update([IDL.Principal], IDL.Bool)
    // async executeUpdateSettings(canisterId: Principal): Promise<boolean> {
    //     await call(
    //         'aaaaa-aa',
    //         'update_settings',
    //         {
    //             paramIdlTypes: [UpdateSettingsArgs],
    //             args: [
    //                 {
    //                     canister_id: canisterId,
    //                     settings: {
    //                         controllers: [],
    //                         compute_allocation: [1n],
    //                         log_visibility: [],
    //                         memory_allocation: [3_000_000n],
    //                         freezing_threshold: [2_000_000n],
    //                         reserved_cycles_limit: [],
    //                         wasm_memory_limit: []
    //                     },
    //                     sender_canister_version: []
    //                 }
    //             ]
    //         }
    //     );
    //
    //     return true;
    // }

    // @update([IDL.Principal, IDL.Vec(IDL.Nat8)], upload_chunk_result)
    // async executeUploadChunk(
    //     canisterId: Principal,
    //     chunk: Uint8Array
    // ): Promise<upload_chunk_result> {
    //     return await call<[upload_chunk_args], upload_chunk_result>(
    //         'aaaaa-aa',
    //         'upload_chunk',
    //         {
    //             paramIdlTypes: [upload_chunk_args],
    //             returnIdlType: chunk_hash,
    //             args: [
    //                 {
    //                     canister_id: canisterId,
    //                     chunk
    //                 }
    //             ]
    //         }
    //     );
    // }

    // @update([IDL.Principal], IDL.Bool)
    // async executeClearChunkStore(canisterId: Principal): Promise<boolean> {
    //     await call<[clear_chunk_store_args], void>(
    //         'aaaaa-aa',
    //         'clear_chunk_store',
    //         {
    //             paramIdlTypes: [clear_chunk_store_args],
    //             args: [
    //                 {
    //                     canister_id: canisterId
    //                 }
    //             ]
    //         }
    //     );
    //
    //     return true;
    // }

    // @update([IDL.Principal], stored_chunks_result)
    // async getStoredChunks(
    //     canisterId: Principal
    // ): Promise<stored_chunks_result> {
    //     return await call<[stored_chunks_args], stored_chunks_result>(
    //         'aaaaa-aa',
    //         'stored_chunks',
    //         {
    //             paramIdlTypes: [stored_chunks_args],
    //             returnIdlType: stored_chunks_result,
    //             args: [
    //                 {
    //                     canister_id: canisterId
    //                 }
    //             ]
    //         }
    //     );
    // }

    // @update([IDL.Principal, IDL.Vec(IDL.Nat8)], IDL.Bool)
    // async executeInstallCode(
    //     canisterId: Principal,
    //     wasmModule: Uint8Array
    // ): Promise<boolean> {
    //     await call(
    //         'aaaaa-aa',
    //         'install_code', {
    //         paramIdlTypes: [InstallCodeArgs],
    //         args: [
    //             {
    //                 mode: {
    //                     install: null
    //                 },
    //                 canister_id: canisterId,
    //                 wasm_module: wasmModule,
    //                 arg: Uint8Array.from([]),
    //                 sender_canister_version: []
    //             }
    //         ],
    //         payment: 100_000_000_000n
    //     });
    //
    //     return true;
    // }

    // @update([IDL.Principal, IDL.Vec(chunk_hash), IDL.Vec(IDL.Nat8)], IDL.Bool)
    // async executeInstallChunkedCode(
    //     canisterId: Principal,
    //     chunkHashes: chunk_hash[],
    //     wasmModuleHash: Uint8Array
    // ): Promise<boolean> {
    //     await call<[install_chunked_code_args], void>(
    //         'aaaaa-aa',
    //         'install_chunked_code',
    //         {
    //             paramIdlTypes: [install_chunked_code_args],
    //             args: [
    //                 {
    //                     mode: {
    //                         install: null
    //                     },
    //                     target_canister: canisterId,
    //                     store_canister: [],
    //                     chunk_hashes_list: chunkHashes,
    //                     wasm_module_hash: wasmModuleHash,
    //                     arg: Uint8Array.from([]),
    //                     sender_canister_version: []
    //                 }
    //             ],
    //             payment: 100_000_000_000n
    //         }
    //     );
    //
    //     return true;
    // }

    // @update([IDL.Principal], IDL.Bool)
    // async executeUninstallCode(canisterId: Principal): Promise<boolean> {
    //     await call<[uninstall_code_args], void>('aaaaa-aa', 'uninstall_code', {
    //         paramIdlTypes: [uninstall_code_args],
    //         args: [
    //             {
    //                 canister_id: canisterId,
    //                 sender_canister_version: []
    //             }
    //         ]
    //     });
    //
    //     return true;
    // }

    // @update([IDL.Principal], IDL.Bool)
    // async executeStartCanister(canisterId: Principal): Promise<boolean> {
    //     await call<[start_canister_args], void>('aaaaa-aa', 'start_canister', {
    //         paramIdlTypes: [start_canister_args],
    //         args: [
    //             {
    //                 canister_id: canisterId
    //             }
    //         ]
    //     });
    //
    //     return true;
    // }

    // @update([IDL.Principal], IDL.Bool)
    // async executeStopCanister(canisterId: Principal): Promise<boolean> {
    //     await call<[stop_canister_args], void>('aaaaa-aa', 'stop_canister', {
    //         paramIdlTypes: [stop_canister_args],
    //         args: [
    //             {
    //                 canister_id: canisterId
    //             }
    //         ]
    //     });
    //
    //     return true;
    // }

    // @update([CanisterInfoArgs],CanisterInfoResult)
    // async getCanisterInfo(
    //     args: CanisterInfoArgs
    // ): Promise<CanisterInfoResult> {
    //     return await call(
    //         'aaaaa-aa',
    //         'canister_info',
    //         {
    //             paramIdlTypes: [CanisterInfoArgs],
    //             returnIdlType: CanisterInfoResult,
    //             args: [args]
    //         }
    //     );
    // }
    //
    // @update([CanisterStatusArgs], CanisterStatusResult)
    // async getCanisterStatus(
    //     args: CanisterStatusArgs
    // ): Promise<CanisterStatusResult> {
    //     return await call(
    //         'aaaaa-aa',
    //         'canister_status',
    //         {
    //             paramIdlTypes: [CanisterStatusArgs],
    //             returnIdlType: CanisterStatusResult,
    //             args: [args]
    //         }
    //     );
    // }

    // @update([IDL.Principal], IDL.Bool)
    // async executeDeleteCanister(canisterId: Principal): Promise<boolean> {
    //     await call<[delete_canister_args], void>(
    //         'aaaaa-aa',
    //         'delete_canister',
    //         {
    //             paramIdlTypes: [delete_canister_args],
    //             args: [
    //                 {
    //                     canister_id: canisterId
    //                 }
    //             ]
    //         }
    //     );
    //
    //     return true;
    // }

    // @update([IDL.Principal], IDL.Bool)
    // async executeDepositCycles(canisterId: Principal): Promise<boolean> {
    //     await call<[deposit_cycles_args], void>('aaaaa-aa', 'deposit_cycles', {
    //         paramIdlTypes: [deposit_cycles_args],
    //         args: [
    //             {
    //                 canister_id: canisterId
    //             }
    //         ],
    //         payment: 10_000_000n
    //     });
    //
    //     return true;
    // }

    // @update([], raw_rand_result)
    // async getRawRand(): Promise<Uint8Array> {
    //     return await call<[], Uint8Array>('aaaaa-aa', 'raw_rand', {
    //         returnIdlType: raw_rand_result
    //     });
    // }

    // // TODO we should test this like we test depositCycles
    // @update([], provisional_create_canister_with_cycles_result)
    // async provisionalCreateCanisterWithCycles(): Promise<provisional_create_canister_with_cycles_result> {
    //     return await call<
    //         [provisional_create_canister_with_cycles_args],
    //         provisional_create_canister_with_cycles_result
    //     >('aaaaa-aa', 'provisional_create_canister_with_cycles', {
    //         paramIdlTypes: [provisional_create_canister_with_cycles_args],
    //         returnIdlType: provisional_create_canister_with_cycles_result,
    //         args: [
    //             {
    //                 amount: [],
    //                 settings: [],
    //                 sender_canister_version: [],
    //                 specified_id: []
    //             }
    //         ]
    //     });
    // }

    // // TODO we should test this like we test depositCycles
    // @update([IDL.Principal, IDL.Nat], IDL.Bool)
    // async provisionalTopUpCanister(
    //     canisterId: Principal,
    //     amount: bigint
    // ): Promise<boolean> {
    //     await call<[provisional_top_up_canister_args], void>(
    //         'aaaaa-aa',
    //         'provisional_top_up_canister',
    //         {
    //             paramIdlTypes: [provisional_top_up_canister_args],
    //             args: [
    //                 {
    //                     canister_id: canisterId,
    //                     amount
    //                 }
    //             ]
    //         }
    //     );
    //
    //     return true;
    // }

    // @query([], IDL.Principal)
    // getCreatedCanisterId(): Principal {
    //     return state.createdCanisterId;
    // }


}

// async function createCanister(): Promise<CreateCanisterResult> {
//     console.log("Dio la madonna");
//     return
// }




export default CompanyRegistryController;