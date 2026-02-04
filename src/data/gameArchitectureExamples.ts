// State Pattern Code Examples
export const STATE_PATTERN_GODOT = `# 1. THE STORE & DISPATCHER (StateMachine.gd)
# Equivalent to: const [state, dispatch] = useReducer(reducer, initialState)
class_name PlayerStateMachine extends Node

var current_state: State
var previous_state: State

func _process(delta: float) -> void:
    change_state(current_state.process(delta))  # Dispatch action result

func _unhandled_input(event: InputEvent) -> void:
    change_state(current_state.handle_input(event))  # Dispatch action result

# The dispatch function: updates store with new state
func change_state(new_state: State) -> void:
    if new_state == null || new_state == current_state:
        return  # No-op (like returning same state in reducer)
    
    if current_state:
        current_state.exit()  # Cleanup old state
    
    previous_state = current_state
    current_state = new_state
    current_state.enter()  # Initialize new state


# 2. THE REDUCER (State_Walk.gd)
# Equivalent to: case 'WALK': return newState
class_name State_Walk extends State

func process(_delta: float) -> State:
    # Business logic (update state data)
    if player.direction == Vector2.ZERO:
        return idle_state  # Transition: WALK → IDLE
    
    player.velocity = player.direction * move_speed
    player.update_animation("walk")
    
    return null  # No transition (like: return state)

func handle_input(_event: InputEvent) -> State:
    # Action-driven transitions
    if _event.is_action_pressed("attack"):
        return attack_state  # Transition: WALK → ATTACK
    
    return null  # No state change
`;

export const STATE_PATTERN_REACT = `# The React Equivalent
type GameState = 'IDLE' | 'WALK' | 'ATTACK';

interface StateData {
  current: GameState;
  previous: GameState | null;
  velocity: { x: number; y: number };
}

type GameAction = 
  | { type: 'PROCESS'; delta: number; direction: { x: number; y: number } }
  | { type: 'INPUT'; key: string };

const walkStateHandler = (state: StateData, action: GameAction): StateData => {
  switch (action.type) {
    case 'PROCESS':
      // Transition Logic: Walk -> Idle
      if (action.direction.x === 0 && action.direction.y === 0) {
        return { 
          ...state, 
          current: 'IDLE',
          previous: 'WALK',
          velocity: { x: 0, y: 0 }
        };
      }
      // Business Logic: Update Velocity
      return {
        ...state,
        velocity: {
          x: action.direction.x * 100,
          y: action.direction.y * 100
        }
      };
    
    case 'INPUT':
      // Transition Logic: Walk -> Attack
      if (action.key === 'SPACE') {
        return { ...state, current: 'ATTACK', previous: 'WALK' };
      }
      return state;
  }
};

const idleStateHandler = (state: StateData, action: GameAction): StateData => {
  // Guard Clause: Only process movement if input exists
  if (action.type === 'PROCESS' && 
     (action.direction.x !== 0 || action.direction.y !== 0)) {
       return { ...state, current: 'WALK', previous: 'IDLE' };
  }
  return state;
};
// Main Reducer (The "State Machine")
const gameReducer = (state: StateData, action: GameAction): StateData => {
  // Routes actions to the active state handler
  switch (state.current) {
    case 'WALK':
      return walkStateHandler(state, action); 
    
    case 'IDLE':
      return idleStateHandler(state, action);
    
    case 'ATTACK':
      return state; // (attackHandler would go here)
    
    default:
      return state;
  }
};`;

// Observer Pattern Code Examples
export const OBSERVER_PATTERN_GODOT = `# 1. THE EVENT BUS (PlayerManager.gd - Autoload)
extends Node
signal interact_pressed # Global event contract

# 2. THE SUBSCRIBER (TreasureChest.gd)
# We only listen for input when the player is close (Optimization)
func _on_area_enter(_a):
    PlayerManager.interact_pressed.connect(_on_interact)

func _on_area_exit(_a):
    # Disconnect to prevent memory leaks or crashes
    # when the player walks away.
    PlayerManager.interact_pressed.disconnect(_on_interact)

func _on_interact():
    if is_open: return
    is_open = true
    animation_player.play("open")
    print("Chest Opened!")`;

export const OBSERVER_PATTERN_REACT = `// 1. THE EVENT BUS (EventBus.ts)
type Listener = () => void;
class Signal {
  private listeners = new Set<Listener>();

  subscribe(fn: Listener) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn); // Return Cleanup
  }

  emit() { this.listeners.forEach(fn => fn()); }
}
export const interactPressed = new Signal();

// 2. THE SUBSCRIBER (TreasureChest.tsx)
export const TreasureChest = () => {
  const [isPlayerNearby, setIsPlayerNearby] = useState(false);

  useEffect(() => {
    if (!isPlayerNearby) return;

    const onInteract = () => console.log("Chest Opened!");

    const unsubscribe = interactPressed.subscribe(onInteract);

    // Cleanup (Disconnect)
    return () => unsubscribe();
    
  }, [isPlayerNearby]); // Dependency ensures re-subscription on change

  return (
    <div 
      onMouseEnter={() => setIsPlayerNearby(true)}
      onMouseLeave={() => setIsPlayerNearby(false)}
    >
      {isPlayerNearby ? "Press E to Open" : "Too far away"}
    </div>
  );
};`;
