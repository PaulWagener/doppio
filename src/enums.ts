"use strict";

/**
 * A class can be in one of these states at any given point in time.
 */
export enum ClassState {
  // The class has yet to be loaded.
  NOT_LOADED,
  // The class's definition has been downloaded and parsed.
  LOADED,
  // This class and its super classes' definitions have been downloaded and
  // parsed.
  RESOLVED,
  // This class, its super classes', and its interfaces have been downloaded,
  // parsed, and statically initialized.
  INITIALIZED
}

/**
 * A thread can be in one of these states at any given point in time.
 *
 * NOTE: When altering ThreadStatus, remember to update the following things.
 *
 * - Thread.validTransitions: Describes each valid thread transition.
 * - sun.misc.VM.getThreadStateValues: Maps ThreadStatus values to Thread.State
 *   values.
 * - Assertion statements in Thread regarding its status.
 */
export enum ThreadStatus {
  // A thread that has not yet started is in this state.
  NEW,
  // A thread that is actively running. Only one thread can be running at once.
  RUNNING,
  // A thread that is not actively running, but is ready to run.
  RUNNABLE,
  // A thread that is blocked waiting for a monitor lock is in this state.
  BLOCKED,
  // A thread that is blocked waiting for a monitor lock that was previously
  // interrupted from waiting on a monitor is in this state.
  // Why? Well, the thread has *already* been interrupted once, but cannot
  // process the interruption until it regains the lock.
  UNINTERRUPTABLY_BLOCKED,
  // A thread that is waiting indefinitely for another thread to perform a
  // particular action is in this state.
  WAITING,
  // A thread that is waiting for another thread to perform an action for up to
  // a specified waiting time is in this state.
  TIMED_WAITING,
  // A thread that is waiting for an asynchronous browser operation to complete.
  ASYNC_WAITING,
  // A thread that is parked.
  PARKED,
  // A thread that has exited is in this state.
  TERMINATED
}

/**
 * Indicates the type of a stack frame.
 */
export enum StackFrameType {
  /**
   * A JVM internal stack frame. These should be completely invisible to the
   * JVM program.
   */
  INTERNAL,
  /**
   * A bytecode method's stack frame. These have an actual stack.
   */
  BYTECODE,
  /**
   * A native method's stack frame. These typically consist of just a JavaScript
   * function and a method association.
   */
  NATIVE
}

/**
 * Various constant values. Enum'd so they are inlined by the TypeScript
 * compiler.
 */
export enum Constants {
  INT_MAX = Math.pow(2, 31) - 1,
  INT_MIN = -INT_MAX - 1,
  FLOAT_POS_INFINITY = Math.pow(2, 128),
  FLOAT_NEG_INFINITY = -1 * FLOAT_POS_INFINITY,
  FLOAT_POS_INFINITY_AS_INT = 0x7F800000,
  FLOAT_NEG_INFINITY_AS_INT = -8388608,
  // We use the JavaScript NaN as our NaN value, and convert it to
  // a NaN value in the SNaN range when an int equivalent is requested.
  FLOAT_NaN_AS_INT = 0x7fc00000
}

/**
 * Integer indicating the type of a constant pool item.
 * @url https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-4.html#jvms-4.4-140
 */
export enum ConstantPoolItemType {
  CLASS = 7,
  FIELDREF = 9,
  METHODREF = 10,
  INTERFACE_METHODREF = 11,
  STRING = 8,
  INTEGER = 3,
  FLOAT = 4,
  LONG = 5,
  DOUBLE = 6,
  NAME_AND_TYPE = 12,
  UTF8 = 1,
  METHOD_HANDLE = 15,
  METHOD_TYPE = 16,
  INVOKE_DYNAMIC = 18
}

/**
 * Characters used on the terminal to format output.
 * Maps each type of formatting to its [beginning, end] characters as an array.
 *
 * Modified from colors.js.
 * @url https://github.com/Marak/colors.js
 */
export var FormatChars = {
  // styles
  BOLD: ['\x1B[1m', '\x1B[22m'],
  ITALICS: ['\x1B[3m', '\x1B[23m'],
  UNDERLINE: ['\x1B[4m', '\x1B[24m'],
  INVERSE: ['\x1B[7m', '\x1B[27m'],
  STRIKETHROUGH: ['\x1B[9m', '\x1B[29m'],
  // text colors
  // grayscale
  WHITE: ['\x1B[37m', '\x1B[39m'],
  GREY: ['\x1B[90m', '\x1B[39m'],
  BLACK: ['\x1B[30m', '\x1B[39m'],

  // colors
  BLUE: ['\x1B[34m', '\x1B[39m'],
  CYAN: ['\x1B[36m', '\x1B[39m'],
  GREEN: ['\x1B[32m', '\x1B[39m'],
  MAGENTA: ['\x1B[35m', '\x1B[39m'],
  RED: ['\x1B[31m', '\x1B[39m'],
  YELLOW: ['\x1B[33m', '\x1B[39m'],
  // background colors
  // grayscale
  WHITE_BG: ['\x1B[47m', '\x1B[49m'],
  GREY_BG: ['\x1B[49;5;8m', '\x1B[49m'],
  BLACK_BG: ['\x1B[40m', '\x1B[49m'],
  // colors
  BLUE_BG: ['\x1B[44m', '\x1B[49m'],
  CYAN_BG: ['\x1B[46m', '\x1B[49m'],
  GREEN_BG: ['\x1B[42m', '\x1B[49m'],
  MAGENTA_BG: ['\x1B[45m', '\x1B[49m'],
  RED_BG: ['\x1B[41m', '\x1B[49m'],
  YELLOW_BG: ['\x1B[43m', '\x1B[49m']
};

/**
 * JVM op codes. The enum value corresponds to that opcode's value.
 */
export enum OpCode {
  AALOAD = 0x32,
  AASTORE = 0x53,
  ACONST_NULL = 0x01,
  ALOAD = 0x19,
  ALOAD_0 = 0x2a,
  ALOAD_1 = 0x2b,
  ALOAD_2 = 0x2c,
  ALOAD_3 = 0x2d,
  ANEWARRAY = 0xbd,
  ARETURN = 0xb0,
  ARRAYLENGTH = 0xbe,
  ASTORE = 0x3a,
  ASTORE_0 = 0x4b,
  ASTORE_1 = 0x4c,
  ASTORE_2 = 0x4d,
  ASTORE_3 = 0x4e,
  ATHROW = 0xbf,
  BALOAD = 0x33,
  BASTORE = 0x54,
  BIPUSH = 0x10,
  BREAKPOINT = 0xca,
  CALOAD = 0x34,
  CASTORE = 0x55,
  CHECKCAST = 0xc0,
  D2F = 0x90,
  D2I = 0x8e,
  D2L = 0x8f,
  DADD = 0x63,
  DALOAD = 0x31,
  DASTORE = 0x52,
  DCMPG = 0x98,
  DCMPL = 0x97,
  DCONST_0 = 0x0e,
  DCONST_1 = 0x0f,
  DDIV = 0x6f,
  DLOAD = 0x18,
  DLOAD_0 = 0x26,
  DLOAD_1 = 0x27,
  DLOAD_2 = 0x28,
  DLOAD_3 = 0x29,
  DMUL = 0x6b,
  DNEG = 0x77,
  DREM = 0x73,
  DRETURN = 0xaf,
  DSTORE = 0x39,
  DSTORE_0 = 0x47,
  DSTORE_1 = 0x48,
  DSTORE_2 = 0x49,
  DSTORE_3 = 0x4a,
  DSUB = 0x67,
  DUP = 0x59,
  DUP_X1 = 0x5a,
  DUP_X2 = 0x5b,
  DUP2 = 0x5c,
  DUP2_X1 = 0x5d,
  DUP2_X2 = 0x5e,
  F2D = 0x8d,
  F2I = 0x8b,
  F2L = 0x8c,
  FADD = 0x62,
  FALOAD = 0x30,
  FASTORE = 0x51,
  FCMPG = 0x96,
  FCMPL = 0x95,
  FCONST_0 = 0x0b,
  FCONST_1 = 0x0c,
  FCONST_2 = 0x0d,
  FDIV = 0x6e,
  FLOAD = 0x17,
  FLOAD_0 = 0x22,
  FLOAD_1 = 0x23,
  FLOAD_2 = 0x24,
  FLOAD_3 = 0x25,
  FMUL = 0x6a,
  FNEG = 0x76,
  FREM = 0x72,
  FRETURN = 0xae,
  FSTORE = 0x38,
  FSTORE_0 = 0x43,
  FSTORE_1 = 0x44,
  FSTORE_2 = 0x45,
  FSTORE_3 = 0x46,
  FSUB = 0x66,
  GETFIELD = 0xb4,
  GETSTATIC = 0xb2,
  GOTO = 0xa7,
  GOTO_W = 0xc8,
  I2B = 0x91,
  I2C = 0x92,
  I2D = 0x87,
  I2F = 0x86,
  I2L = 0x85,
  I2S = 0x93,
  IADD  = 0x60,
  IALOAD = 0x2e,
  IAND = 0x7e,
  IASTORE = 0x4f,
  ICONST_M1 = 0x2,
  ICONST_0 = 3,
  ICONST_1 = 4,
  ICONST_2 = 5,
  ICONST_3 = 6,
  ICONST_4 = 7,
  ICONST_5 = 8,
  IDIV  = 0x6c,
  IF_ACMPEQ = 0xa5,
  IF_ACMPNE = 0xa6,
  IF_ICMPEQ = 0x9f,
  IF_ICMPGE = 0xa2,
  IF_ICMPGT = 0xa3,
  IF_ICMPLE = 0xa4,
  IF_ICMPLT = 0xa1,
  IF_ICMPNE = 0xa0,
  IFEQ  = 0x99,
  IFGE  = 0x9c,
  IFGT  = 0x9d,
  IFLE  = 0x9e,
  IFLT  = 0x9b,
  IFNE  = 0x9a,
  IFNONNULL = 0xc7,
  IFNULL = 0xc6,
  IINC  = 0x84,
  ILOAD = 0x15,
  ILOAD_0 = 0x1a,
  ILOAD_1 = 0x1b,
  ILOAD_2 = 0x1c,
  ILOAD_3 = 0x1d,
  // IMPDEP1 = 0xfe,
  // IMPDEP2 = 0xff,
  IMUL  = 0x68,
  INEG  = 0x74,
  INSTANCEOF = 0xc1,
  INVOKEDYNAMIC = 0xba,
  INVOKEINTERFACE = 0xb9,
  INVOKESPECIAL = 0xb7,
  INVOKESTATIC = 0xb8,
  INVOKEVIRTUAL = 0xb6,
  IOR   = 0x80,
  IREM  = 0x70,
  IRETURN = 0xac,
  ISHL  = 0x78,
  ISHR  = 0x7a,
  ISTORE = 0x36,
  ISTORE_0 = 0x3b,
  ISTORE_1 = 0x3c,
  ISTORE_2 = 0x3d,
  ISTORE_3 = 0x3e,
  ISUB = 0x64,
  IUSHR = 0x7c,
  IXOR = 0x82,
  JSR = 0xa8,
  JSR_W = 0xc9,
  L2D = 0x8a,
  L2F = 0x89,
  L2I = 0x88,
  LADD = 0x61,
  LALOAD = 0x2f,
  LAND = 0x7f,
  LASTORE = 0x50,
  LCMP = 0x94,
  LCONST_0 = 0x09,
  LCONST_1 = 0x0a,
  LDC = 0x12,
  LDC_W = 0x13,
  LDC2_W = 0x14,
  LDIV = 0x6d,
  LLOAD = 0x16,
  LLOAD_0 = 0x1e,
  LLOAD_1 = 0x1f,
  LLOAD_2 = 0x20,
  LLOAD_3 = 0x21,
  LMUL = 0x69,
  LNEG = 0x75,
  LOOKUPSWITCH = 0xab,
  LOR = 0x81,
  LREM = 0x71,
  LRETURN = 0xad,
  LSHL = 0x79,
  LSHR = 0x7b,
  LSTORE = 0x37,
  LSTORE_0 = 0x3f,
  LSTORE_1 = 0x40,
  LSTORE_2 = 0x41,
  LSTORE_3 = 0x42,
  LSUB = 0x65,
  LUSHR = 0x7d,
  LXOR = 0x83,
  MONITORENTER = 0xc2,
  MONITOREXIT = 0xc3,
  MULTIANEWARRAY = 0xc5,
  NEW = 0xbb,
  NEWARRAY = 0xbc,
  NOP = 0x00,
  POP = 0x57,
  POP2 = 0x58,
  PUTFIELD = 0xb5,
  PUTSTATIC = 0xb3,
  RET = 0xa9,
  RETURN = 0xb1,
  SALOAD = 0x35,
  SASTORE = 0x56,
  SIPUSH = 0x11,
  SWAP = 0x5f,
  TABLESWITCH = 0xaa,
  WIDE = 0xc4,

  // Special Doppio 'fast' opcodes
  GETSTATIC_FAST32 = 0xd0,
  GETSTATIC_FAST64 = 0xd1,
  NEW_FAST = 0xd2,
  NEW_CL_FAST = 0xd3,
  NEW_THREAD_FAST = 0xd4,
  ANEWARRAY_FAST = 0xd5,
  CHECKCAST_FAST = 0xd6,
  INSTANCEOF_FAST = 0xd7,
  MULTIANEWARRAY_FAST = 0xd8,
  PUTSTATIC_FAST32 = 0xd9,
  PUTSTATIC_FAST64 = 0xda,
  GETFIELD_FAST32 = 0xdb,
  GETFIELD_FAST64 = 0xdc,
  PUTFIELD_FAST32 = 0xdd,
  PUTFIELD_FAST64 = 0xde,
  INVOKESPECIAL_FAST = 0xdf,
  INVOKESTATIC_FAST = 0xf0,
  INVOKEVIRTUAL_FAST = 0xf1,
  INVOKEINTERFACE_FAST = 0xf2
}

export enum OpcodeLayoutType {
  OPCODE_ONLY,
  CONSTANT_POOL_UINT8,
  CONSTANT_POOL,
  CONSTANT_POOL_AND_UINT8_VALUE,
  UINT8_VALUE,
  UINT8_AND_INT8_VALUE,
  INT8_VALUE,
  INT16_VALUE,
  INT32_VALUE,
  // LOOKUPSWITCH,
  // TABLESWITCH,
  ARRAY_TYPE,
  WIDE
}

// Contains the opcode layout types for each valid opcode.
// To conserve code space, it's assumed all opcodes not in the table
// are OPCODE_ONLY.
var olt: OpcodeLayoutType[] = new Array(0xff);
(() => {
  for (var i = 0; i < 0xff; i++) {
    olt[i] = OpcodeLayoutType.OPCODE_ONLY;
  }
})();
function assignOpcodeLayout(layoutType: OpcodeLayoutType, opcodes: OpCode[]): void {
  opcodes.forEach((opcode) => {
    olt[opcode] = layoutType;
  });
}

assignOpcodeLayout(OpcodeLayoutType.UINT8_VALUE,
  [OpCode.ALOAD, OpCode.ASTORE, OpCode.DLOAD, OpCode.DSTORE,
   OpCode.FLOAD, OpCode.FSTORE, OpCode.ILOAD, OpCode.ISTORE,
   OpCode.LLOAD, OpCode.LSTORE, OpCode.RET]);
assignOpcodeLayout(OpcodeLayoutType.CONSTANT_POOL_UINT8, [OpCode.LDC]);
assignOpcodeLayout(OpcodeLayoutType.CONSTANT_POOL,
  [OpCode.LDC_W, OpCode.LDC2_W,
   OpCode.ANEWARRAY, OpCode.CHECKCAST, OpCode.GETFIELD,
   OpCode.GETSTATIC, OpCode.INSTANCEOF, OpCode.INVOKEDYNAMIC,
   OpCode.INVOKESPECIAL, OpCode.INVOKESTATIC, OpCode.INVOKEVIRTUAL,
   OpCode.NEW, OpCode.PUTFIELD, OpCode.PUTSTATIC, OpCode.MULTIANEWARRAY_FAST,
   OpCode.INVOKESPECIAL_FAST, OpCode.INVOKESTATIC_FAST, OpCode.CHECKCAST_FAST,
   OpCode.NEW_FAST, OpCode.NEW_CL_FAST, OpCode.NEW_THREAD_FAST,
   OpCode.ANEWARRAY_FAST, OpCode.INSTANCEOF_FAST, OpCode.GETSTATIC_FAST32,
   OpCode.GETSTATIC_FAST64, OpCode.PUTSTATIC_FAST32, OpCode.PUTSTATIC_FAST64,
   OpCode.PUTFIELD_FAST32, OpCode.PUTFIELD_FAST64,
   OpCode.GETFIELD_FAST32, OpCode.GETFIELD_FAST64, OpCode.INVOKEVIRTUAL_FAST
]);
assignOpcodeLayout(OpcodeLayoutType.CONSTANT_POOL_AND_UINT8_VALUE,
  [OpCode.INVOKEINTERFACE, OpCode.MULTIANEWARRAY, OpCode.INVOKEINTERFACE_FAST]);
assignOpcodeLayout(OpcodeLayoutType.INT8_VALUE, [OpCode.BIPUSH]);
assignOpcodeLayout(OpcodeLayoutType.INT16_VALUE,
  [OpCode.SIPUSH, OpCode.GOTO, OpCode.IFGT, OpCode.IFEQ, OpCode.IFGE, OpCode.IFLE,
   OpCode.IFLT, OpCode.IFNE, OpCode.IFNULL, OpCode.IFNONNULL, OpCode.IF_ICMPLE,
   OpCode.IF_ACMPEQ, OpCode.IF_ACMPNE, OpCode.IF_ICMPEQ, OpCode.IF_ICMPGE,
   OpCode.IF_ICMPGT, OpCode.IF_ICMPLT, OpCode.IF_ICMPNE, OpCode.JSR]);
assignOpcodeLayout(OpcodeLayoutType.INT32_VALUE, [OpCode.GOTO_W, OpCode.JSR_W]);
assignOpcodeLayout(OpcodeLayoutType.UINT8_AND_INT8_VALUE, [OpCode.IINC]);
assignOpcodeLayout(OpcodeLayoutType.ARRAY_TYPE, [OpCode.NEWARRAY]);

export var OpcodeLayouts = olt;
